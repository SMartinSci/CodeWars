#  Given: object = (meet)
#  Iterate over keys (team), values (i)
#   score = score + i
#  (Happiness = 0 .. 10)
#  If Happiness <= 5 return "Get Out Now!"
# else return "Nice Work Champ"
# # i= total score / meet
# [key = name, value = i]
# If boss then (i (of the boss) * 2)

def outed(meet, boss)
  score = 0
  meet.each do |name, ind| 
    score += ind unless name == boss
    score += ind * 2 if name == boss
  end
 
  avg = score/meet.length
  if avg <= 5 
    "Get Out Now!"
  else 
    "Nice Work Champ!"
  end
end
