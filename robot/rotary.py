from time import sleep
import pyupm_grove as grove

servo1Rotary = grove.GroveRotary(0)
servo2Rotary = grove.GroveRotary(1)
servo3Rotary = grove.GroveRotary(2)
servo4Rotary = grove.GroveRotary(3)

# Loop indefinitely
while True:

    # Read values and transform to 0 to 180
    servo1angle = int(servo1Rotary.abs_value())*180/1024
    servo2angle = int(servo2Rotary.abs_value())*180/1024
    servo3angle = int(servo3Rotary.abs_value())*180/1024
    servo4angle = int(servo4Rotary.abs_value())*180/1024

    print "servo1angle: %4d" % servo1angle, "servo2angle: %4d" % servo2angle, "servo3angle: %4d" % servo3angle, "servo4angle: %4d" % servo4angle 

    # Sleep for 2.5 s
    sleep(1.5)