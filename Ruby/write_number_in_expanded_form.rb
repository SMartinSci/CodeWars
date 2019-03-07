# Problem:
# Write Number in Expanded Form
# You will be given a number and you will need to return it as a string in Expanded Form. For example:

# expandedForm(12); // Should return '10 + 2'
# expandedForm(42); // Should return '40 + 2'
# expandedForm(70304); // Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.

def expanded_form(num)
  num.digits.map.with_index do |value, index|
    value*(10**index) if value > 0
  end.compact.reverse.join(" + ")
end