def nb_year(p0, percent, aug, p)
    # your code
    
    n = 0
    percent = percent.to_f/100
    
   # while p > p0
   while (p0 < p)
      p0 += (p0 * percent).to_i + aug 
      
      n += 1
        
    end 
     n
end