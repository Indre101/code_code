# Write your function below!
fizz_list = ["ljh", "fizz", "fizz", "fizz", "bish"]


def fizz_count(fizz_list):
    for word in fizz_list:
        total = 0
        if word == "fizz":
            total = total + 1
            return total


a = fizz_count(fizz_list)
print a
