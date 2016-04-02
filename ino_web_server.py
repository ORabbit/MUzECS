#!/usr/bin/python
# -*- coding: utf-8 -*-
#modified by Marquette REU team
import BaseHTTPServer, urllib, re, os,sys
from BaseHTTPServer import HTTPServer
from SocketServer import ThreadingMixIn
import random
import threading
import string
import time

absPathMUBD ="/var/www/html/MUBlocklyDuino/"
lock = threading.Lock()
lock3 = threading.Lock()
lock2 = threading.Lock()
server_info=("134.48.6.40", 8080)
#make the HTTP Server multi threaded
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
	#don't send header html to the extension
        #self.do_HEAD()
        self.wfile.write(self.template_begin)
	#critical section where we try to find the hex_file corresponding to the client's ip address and when we find it send the link with html tags to the extension
	lock.acquire()
        hosts_file=open(absPathMUBD+"ardusers/hosts.txt","r")
        #hex file is captured by (\w+)
        match=re.search(self.client_address[0]+":(\w+)", hosts_file.read())
        hosts_file.close()
	lock.release()
        #if there is a hex file success and tell the user the link if not tellt them file not found
        if match!=None:
            hex_file=match.group(1)
            print (time.strftime("%d/%m/%Y - %I:%M:%S"))+"success "+self.client_address[0]+" got the hex file "+hex_file
            print (time.strftime("%d/%m/%Y - %I:%M:%S"))+"http://"+server_info[0]+"/MUBlocklyDuino/ardusers/hex_files/"+hex_file+".txt"
            self.wfile.write("http://"+server_info[0]+"/ardusers/hex_files/"+hex_file+".txt")
        else:
            print "file not found"
            self.wfile.write("file_not_found")

        self.wfile.write(self.template_end)
        print (time.strftime("%d/%m/%Y - %I:%M:%S"))+threading.currentThread().getName()+" handled GET Request from "+self.client_address[0]


    def do_POST(self):
        """Save new page text and display it"""
        length = int(self.headers.getheader('content-length'))
	print (time.strftime("%d/%m/%Y - %I:%M:%S"))+threading.currentThread().getName()+" handling post request from "+self.client_address[0]                        
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
                # write to file: critical section
		lock2.acquire()
                fo = open("src/sketch.ino", "wb")
                fo.write(text + "\n");
                fo.close()
		lock2.release()
                print "created src/sketch.ino"
            
                # invoke ino to build
	        print "ino building"
	        lock3.acquire()	
	        rc = os.system("ino build")
                lock3.release()

                # 512 probably means invalid option (skip_lib_includes)
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
                        #edit hosts. We are inside the ino_project: critical section
			#read the hosts and if we haven't seen the client's ip address yet then write to the hosts file with a randomly generated name for the hex_file
			# if we have seen the client's ip address be fore then get the hex file that corresponds to the clients and overwrite it with the new hex file 
			lock.acquire()
                        hosts_file = open(absPathMUBD+"ardusers/hosts.txt","r+")
                        match=re.search(self.client_address[0]+":(\w+)",hosts_file.read())
                        if match==None:#hex_file not found append to file
                            new_hex_file=''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(8))
                            hosts_file.write(self.client_address[0]+":"+new_hex_file+".txt\n")
                            os.system("cp "+absPathMUBD+"ino_project/.build/leonardo/firmware.hex "+absPathMUBD+"ardusers/hex_files/"+new_hex_file+".txt")
                            print (time.strftime("%d/%m/%Y - %I:%M:%S"))+"written to hosts.txt this line: "+self.client_address[0]+":"+new_hex_file+".txt with the nex hex file"
                        else:#edit the file with the new firmware hex
                            hex_file=match.group(1)
                            os.system("cp "+absPathMUBD+"ino_project/.build/leonardo/firmware.hex "+absPathMUBD+"ardusers/hex_files/"+hex_file+".txt")
                        hosts_file.close()
			lock.release()
                        print (time.strftime("%d/%m/%Y - %I:%M:%S"))+"updated the users hex file with the compiled hex"
                        self.send_response(200)
			self.send_header("Access-Control-Allow-Origin","*")
            os.chdir("..")
	#this occurs if the person doesn't click the arduino tab atleast once: the length of content is 0
	else:
	    print (time.strftime("%d/%m/%Y - %I:%M:%S"))+"post request failed because content was "+ str(length)+" bytes" 
	    self.send_response(300)
	    self.send_header("Access-Control-Allow-Origin","*")
if __name__ == '__main__':
    print (time.strftime("%d/%m/%Y - %I:%M:%S"))+"running local web server at 134.48.6.40:8080..."
    fpid = os.fork()
    if fpid!=0:
	sys.exit(0)
    server = BrylowHTTPServer(server_info, Handler)
    print 'Starting server, use <Ctrl-C> to stop'
    server.pages = {}
    server.serve_forever()

