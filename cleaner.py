#!/usr/bin/python
#created by Marquette REU team
from os.path import isfile, join
import time, os, sys, getopt
from os import listdir
#absolute path to the arduses folder where most of the files of the system are hosted
mypath="/var/www/html/MUBlocklyDuino/ardusers/"
def cleanHouse(argv):
	#default
	hours=0
	minutes=0
	seconds=0
	#command line options to the program where one can input the amount of time it'll take the program to wipe the hosted hex files on the system
	try:
		opts, args = getopt.getopt(argv, "hHm:s:",["ho=","hours=","mins=","minutes=","secs=","seconds="])
	except getopt.GetoptError:
		print 'cleaner.py -h <hours> -m <minutes> -s <seconds>'
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-h':
			print 'cleaner.py -H <hours> -m<minutes> -s<seconds>'
			sys.exit()
		elif opt in ("-H","--ho","--hours"):
			hours = int(arg)
		elif opt in ("-m", "--mins", "--minutes"):
			minutes = int(arg)
		elif opt in ("-s","--secs","--seconds"):
			seconds = int(arg)
	print "garbage cleaner will clean files every "+str(hours)+" hours "+str(minutes)+" minutes "+str(seconds)+" seconds"
	#default option is 24 hours
	if hours==0 and minutes==0 and seconds==0:
		hours=24	

        killedFiles=0
        start = time.time()
	hoursSeconds=60*60*hours
	minuteSeconds=60*minutes
	#infinite loop where the files will be wiped after time frame
        while(True):
                #starts cleaning the files every 24 hours
                if(time.time()-start >= hoursSeconds+minuteSeconds+seconds):
                        print "Starting to clean files. It has been "+str(hours)+" hours "+str(minutes)+" minutes "+str(seconds)+" seconds"
                        #maybe hosts file is being accessed by server
			#wipe hosts file
                        emptiedHostsFile = False
                        with open(mypath+"hosts.txt","w") as hosts_file:
                                hosts_file.write("")
                                emptiedHostsFile = True
			#delete every files in the ard users directory
                        onlyfiles = [ f for f in listdir(mypath+"hex_files/") if isfile(join(mypath+"hex_files/",f)) ]
                        print "cleaning hex_files directory..."
                        for f in onlyfiles:
				os.remove(join(mypath+"hex_files/",f))
				killedFiles+=1
				print "removed "+f
                        #reset start time
			print "finished cleaning files."
                        start=time.time()
if __name__ == '__main__':
    print "running ino web server garbage cleaner"
    cleanHouse(sys.argv[1:]):
