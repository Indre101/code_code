from math import degrees
from math import acos

print ("WHAT TYPE OF TRIANGE CALCULATION")
print ("BEGIN")


a = float(input("What is the length of first line: "))
b = float(input("What is the length of first line: "))
c = float(input("What is the length of first line: "))

if a > 0 and b > 0 and c > 0 and a <= b + c:
    a_kampas = (((a**2+b**2 - c**2) / (2 * a*b)))
    b_kampas = (((b**2+c**2 - a**2) / (2 * c*b)))
    c_kampas = (((a**2+c**2 - b**2) / (2 * a*c)))

    a_laipsnis = degrees(acos(a_kampas))
    b_laipsnis = degrees(acos(b_kampas))
    c_laipsnis = degrees(acos(c_kampas))

if a_laipsnis == 90 or b_laipsnis == 90 or c_laipsnis == 90:
    print (f"The degrees of the corners are {a_laipsnis:.2f}, {b_laipsnis:.2f} and {c_laipsnis:.2f}, so the triagle is rectangle") 
elif a_laipsnis > 90 or b_laipsnis > 90 or c_laipsnis > 90:
    print (f"The degrees of the corners are {a_laipsnis:.2f}, {b_laipsnis:.2f} and {c_laipsnis:.2f}, so the triagle is obtuse")
else:
    print (f"The degrees of the corners are {a_laipsnis:.2f}, {b_laipsnis:.2f} and {c_laipsnis:.2f}, so the triagle is acute" )
# print "The length of lines can't be negative number or lower than 0"
