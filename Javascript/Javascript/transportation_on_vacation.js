# Every day you rent the car, car costs $40
# If you rent for 7 or more days, you get total - $50
# Or
# Rent car for >= 3 days, you get total - $20

# The outcome: total for different days

# total = 40 * days - deal
# 1. Rent >= 7 days - deal($50)
# 2. Rent >= 3 days - deal($20)
#    total = 40 * 4 - 20 = 100


def rental_car_cost(day)
    if day >= 7
        discount = 50
        total = 40 * day - discount
    elsif
        (day < 7) && (day >= 3)

        discount = 20
        total = 40 * day - discount
    else
        discount = 0
        total = 40 * day - discount
    end
end