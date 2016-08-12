from time import sleep
import pyupm_ttp223 as ttp223
import pyupm_grove as grove
import pyupm_servo as servo 

servo5Touch = ttp223.TTP223(4)

servo5 = servo.ES08A(3)

while True:

	servo5Activate = servo5Touch.isPressed()

	print "servo5Activate: %r" % servo5Activate 

	if servo5Activate :
		servo5.setAngle(180)
	else :
		servo5.setAngle(0)

    	# Sleep for 1 s
    	sleep(1)
