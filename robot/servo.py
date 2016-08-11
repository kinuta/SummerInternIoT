import time
import random
import pyupm_servo as servo 

# Create the servo 
gServo = servo.ES08A(5)

def getNextAngle():
    return random.randint(0, 180)

def gogogo(angle):
    gServo.setAngle(angle)
    print('move to angle : ',angle)
    time.sleep(0.5)
    return gogogo(getNextAngle())

gogogo(0)

# Delete the servo object
del gServo 
