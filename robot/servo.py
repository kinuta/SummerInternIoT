import time
import random
import pyupm_servo as servo 

servo1 = servo.ES08A(5)#したのやつ
servo2 = servo.ES08A(6)
servo3 = servo.ES08A(7)
servo4 = servo.ES08A(8)
servo5 = servo.ES08A(9)#上のやつ。つまりここが手

# def setAngle(targetServo, angle):
#     targetServo.setAngle(angle)
#     print(targetServo,"move to angle : ",angle)



# Delete the servo object
del gServo 
