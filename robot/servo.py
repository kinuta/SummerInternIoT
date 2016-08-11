import time
import random
import pyupm_servo as servo 

gServo1 = servo.ES08A(5)#したのやつ
gServo2 = servo.ES08A(6)
gServo3 = servo.ES08A(7)
gServo4 = servo.ES08A(8)
gServo5 = servo.ES08A(9)#上のやつ。つまりここが手

# def setAngle(targetServo, angle):
#     targetServo.setAngle(angle)
#     print(targetServo,"move to angle : ",angle)



# Delete the servo object
del gServo 
