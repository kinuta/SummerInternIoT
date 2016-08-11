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

# gogogo(0)
gServo.setAngle(0)
time.sleep(2)
gServo.setAngle(90)
time.sleep(2)
gServo.setAngle(180)
time.sleep(2)
#gServo.setAngle(270)
print("end")


# Delete the servo object
del gServo 
