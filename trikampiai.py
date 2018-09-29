import math
print "WHAT TYPE OF TRIANGE CALCULATION"
print ("BEGIN")


a = float(input("What is the length of first line: "))
b = float(input("What is the length of first line: "))
c = float(input("What is the length of first line: "))


# def zygis(a, b, c):
# return (a**2+b**2 - c**2) / (2 * a*b)


if a > 0 and b > 0 and c > 0 and a <= b + c:
    a_kampas = (((a**2+b**2 - c**2) / (2 * a*b)))
    b_kampas = (((b**2+c**2 - a**2) / (2 * c*b)))
    c_kampas = (((a**2+c**2 - b**2) / (2 * a*c)))

    a_laipsnis = math.degrees(math.acos(a_kampas))
    b_laipsnis = math.degrees(math.acos(b_kampas))
    c_laipsnis = math.degrees(math.acos(c_kampas))

if a_laipsnis == 90 or b_laipsnis == 90 or c_laipsnis == 90:
    print "The degrees of the corners are %i, %i and %i, so the triagle is rectangle" % (
        a_laipsnis, b_laipsnis, c_laipsnis)
elif a_laipsnis > 90 or b_laipsnis > 90 or c_laipsnis > 90:
    print "The degrees of the corners are %i, %i and %i, so the triagle is obtuse" % (
        a_laipsnis, b_laipsnis, c_laipsnis)
else:
    print "The degrees of the corners are %i, %i and %i, so the triagle is acute" % (
        a_laipsnis, b_laipsnis, c_laipsnis)


# print "The length of lines can't be negative number or lower than 0"
