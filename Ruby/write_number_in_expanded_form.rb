def expanded_form(num)
  num.digits.map.with_index do |value, index|
    value*(10**index) if value > 0
  end.compact.reverse.join(" + ")
end