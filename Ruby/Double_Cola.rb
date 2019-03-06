def whoIsNext(names, r)
  counter = 0
  increment = 1
  loop do
    for i in 0..(names.length - 1)
      counter += increment
      return names[i] if counter >= r
    end
    increment *= 2
  end
end