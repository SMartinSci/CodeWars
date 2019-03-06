# Examples:
# [8, 4, 2, 1] ===> 4 + 1
# [32, 16, 8, 4, 2, 1]
# 2^6, 2^5, 2^4, 2^3, 2^2, 2^1
# [0,0,0,1]
# Th  H    T  U 
# 2^3 2^2 2^1 2^0

# Pseudocode:
# Variables: Length, where [index = 1]
# Where [index = 1] == (2 ^ index) 
# Step 1: Take array[index] variable.reverse
# Step 2: iterate through array.length
# Step 3: [index = 1] == (2 ^ index) => [integer array]
# Step 4: Sum [integer array] values

def binary_array_to_number(arr) 
  integer = 0
  arr.reverse.each_with_index do |element, index|  
  if element == 1 
  integer += 2 ** index
  # puts element[index]
  # integer_array <= (2 ** index) 
    end
  end 
   return integer
end