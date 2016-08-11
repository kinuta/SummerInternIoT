import time
import pyupm_ttp223 as ttp223

# Create the TTP223 touch sensor object using GPIO pin 4
touch = ttp223.TTP223(4)

# Check whether or not a finger is near the touch sensor and
# print accordingly, waiting one second between readings
while 1:
    if touch.isPressed():
        print touch.name(), 'is pressed'
    else:
        print touch.name(), 'is not pressed'
    time.sleep(1)

# Delete the touch sensor object
del touch