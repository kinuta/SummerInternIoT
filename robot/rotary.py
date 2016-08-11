from time import sleep
import pyupm_grove as grove

# New knob on AIO pin 0
knob = grove.GroveRotary(0)

# Loop indefinitely
while True:

    # Read values and transform to 0 to 180
    angle = int(knob.abs_value())*180/1024

    print "angle: %4d" % angle 

    # Sleep for 2.5 s
    sleep(1.5)