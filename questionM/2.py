from time import sleep

i = 1
while True:
    print(i)
    i *=2
    sleep(1)
    if i >=10000:
        break