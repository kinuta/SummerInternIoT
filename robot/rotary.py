from time import sleep
import pyupm_grove as grove

# New knob on AIO pin 0
knob = grove.GroveRotary(0)

# Loop indefinitely
while True:

    # Read values
    abs = knob.abs_value()
    absdeg = knob.abs_deg()
    absrad = knob.abs_rad()

    rel = knob.rel_value()
    reldeg = knob.rel_deg()
    relrad = knob.rel_rad()

    print "Abs values: %4d" % int(abs) , " raw %4d" % int(absdeg), "deg = %5.2f" % absrad , " rad ",
    print "Rel values: %4d" % int(rel) , " raw %4d" % int(reldeg), "deg = %5.2f" % relrad , " rad"

    # Sleep for 2.5 s
    sleep(2.5)