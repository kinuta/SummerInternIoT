import time
import pyupm_servo as servo 

# Create the servo 
gServo = servo.ES08A(5)

for i in range(0,1000): 
    # Set the servo arm to 0 degrees
    gServo.setAngle(0)
    print 'Set angle to 0'
    time.sleep(1)

    # Set the servo arm to 90 degrees
    gServo.setAngle(90)
    print 'Set angle to 90'
    time.sleep(1)

    # Set the servo arm to 180 degrees
    gServo.setAngle(180)
    print 'Set angle to 180'
    time.sleep(1)

# Delete the servo object
del gServo 
