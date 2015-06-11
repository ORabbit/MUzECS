#!/usr/bin/python
# -*- coding: utf-8 -*-
#
# credit: http://sheep.art.pl/Wiki%20Engine%20in%20Python%20from%20Scratch

import BaseHTTPServer, urllib, re, os
from BaseHTTPServer import HTTPServer
from SocketServer import ThreadingMixIn
import random
import threading
import string
lock = threading.Lock()
server_info=("134.48.6.40", 8080)
class BrylowHTTPServer(ThreadingMixIn, HTTPServer):
    pass
    #Handle requests in seperate process

class Handler(BaseHTTPServer.BaseHTTPRequestHandler):
    #template_begin = u"""<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
	#"http://www.w3.org/TR/html4/strict.dtd"><html><body>"""
    #template_end=u"<h1>Arduino INO web server</h1>To upload to an Arduino board connected to this computer, POST to /.</body></html>"
    template_begin="<html>"
    template_end="</html>"
    def escape_html(self, text):
        """Replace special HTML characters with HTML entities"""
        return text.replace(
            "&", "&amp;").replace(">", "&gt;").replace("<", "&lt;")

    def do_HEAD(self):
        """Send response headers"""
        self.send_response(200)
        self.send_header("content-type", "text/html;charset=utf-8")
        self.end_headers()

    def do_GET(self):
        """Send a link of a hex file corresponding with your ip address."""
        #self.do_HEAD()
        self.wfile.write(self.template_begin)
        #if doesn't exit make it
        #os.system("mkdir ardusers")
        #os.system("mkdir ardusers/hex_files")

	lock.acquire()
        hosts_file=open("ardusers/hosts.txt","r")
            #hex file is captured by (\w+)
        match=re.search(self.client_address[0]+":(\w+)", hosts_file.read())
        hosts_file.close()
	lock.release()
        #if there is a hex file success and tell the user
        if match!=None:
            hex_file=match.group(1)
            print "success "+self.client_address[0]+" got the hex file "+hex_file
            print "http://"+server_info[0]+"/MUBlocklyDuino/ardusers/hex_files/"+hex_file+".txt"
            self.wfile.write("http://"+server_info[0]+"/ardusers/hex_files/"+hex_file+".txt")
        else:
            print "file not found"
            self.wfile.write("file_not_found")

        self.wfile.write(self.template_end)
        print threading.currentThread().getName()+" handled GET Request from "+self.client_address[0]


    def do_POST(self):
        """Save new page text and display it"""
        length = int(self.headers.getheader('content-length'))
	print threading.currentThread().getName()+" handling post request from "+self.client_address[0]                        
        if length:
            text = self.rfile.read(length)
                        
            print "sketch to upload: " + text

            # create ino project (if it doesn't exist already)
            os.system("mkdir ino_project")
            os.chdir("ino_project")
            rc = os.system("ino init")
            
            # 32512 probably means ino is not installed
            if rc == 32512:
                print "ino init returned " + `rc`            
                self.send_response(501)
            else:            
                # write to file
		lock.acquire()
                fo = open("src/sketch.ino", "wb")
                fo.write(text + "\n");
                fo.close()
		lock.release()
                print "created src/sketch.ino"
            
                # invoke ino to build/upload
                # skip_lib_includes is used to avoid "line too long" errors with IDE 1.5.8+
                rc = os.system("ino build --skip_lib_includes")

                # 512 probably means invalid option (skip_lib_includes)
                if rc == 512:
                    print "ino build returned " + `rc` + " - trying again without skip_lib_includes"
                    rc = os.system("ino build")
                
                if not rc == 0:#didn't work
                    print "ino build returned " + `rc`                            
                    self.send_response(400)
                else:
                    #no upload 
                    #rc = os.system("ino upload")
                    if not rc == 0:#didn't work
                        print "ino build returned " + `rc`           
                        self.send_response(500)
                    else:
                        #create fØlders and hosts.txt if not made
                        #os.system("mkdir ../ardusers")
                        #os.system("mkdir ../ardusers/hex_files")

                        #edit hosts. We are inside the ino_project
			lock.acquire()
                        hosts_file = open("../ardusers/hosts.txt","r+")
                        match=re.search(self.client_address[0]+":(\w+)",hosts_file.read())
                        hosts_file.close()
			lock.release()
                        if match==None:#hex_file not found append to file
                            new_hex_file=''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(8))
                            hosts_file.write(self.client_address[0]+":"+new_hex_file+".txt\n")
                            os.system("cp .build/leonardo/firmware.hex ../ardusers/hex_files/"+new_hex_file+".txt")
                            print "written to hosts.txt this line: "+self.client_address[0]+":"+new_hex_file+".txt with the nex hex file"
                        else:#edit the file with the new firmware hex
                            hex_file=match.group(1)
                            os.system("cp .build/leonardo/firmware.hex ../ardusers/hex_files/"+hex_file+".txt")
                            print "updated the users hex file with the compiled hex"
                        self.send_response(200)
            os.chdir("..")
	else:
	    print "post request failed because content was "+ str(length)+" bytes" 
if __name__ == '__main__':
    print "running local web server at 134.48.6.40:8080..."
    server = BrylowHTTPServer(server_info, Handler)
    print 'Starting server, use <Ctrl-C> to stop'
    server.pages = {}
    server.serve_forever()

