from time import sleep
import pyupm_ttp223 as ttp223
import pyupm_grove as grove
import pyupm_servo as servo 

servo1Rotary = grove.GroveRotary(0)
servo2Rotary = grove.GroveRotary(1)
servo3Rotary = grove.GroveRotary(2)
servo4Rotary = grove.GroveRotary(3)

servo1 = servo.ES08A(3)
servo2 = servo.ES08A(5)
servo3 = servo.ES08A(6)
servo4 = servo.ES08A(9)

while True:

	servo1Angle = int(servo1Rotary.abs_value())*180/1024
	servo2Angle = int(servo2Rotary.abs_value())*180/1024
	servo3Angle = int(servo3Rotary.abs_value())*180/1024
	servo4Angle = int(servo4Rotary.abs_value())*180/1024

	print "servo1angle: %4d" % servo1angle, "servo2angle: %4d" % servo2angle, "servo3angle: %4d" % servo3angle, "servo4angle: %4d" % servo4angle

	servo1.setAngle(servo1Angle)
	servo2.setAngle(servo2Angle)
	servo3.setAngle(servo3Angle)
	servo4.setAngle(servo4Angle)

	# Sleep for 1 s
	sleep(1)
