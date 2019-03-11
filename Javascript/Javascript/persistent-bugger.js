// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(3x9) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {

    // let steps = 0
    num = num.toString();

    while (num.length > 1) {

        //  steps++
        num = num.split('').reduce((total, amount) =>
            total * +amount).toString();

    }

    return num;

}
// 
persistence(4)// return 0
//persistence(25)//return 2
// 2 x 5 = 10, 1 x 0 = 0 

///Pseudocode Steps
//Check length of first value in function
//if length = 1, then return 0.
// Iterate through the first value in the function, multiply the individual numbers within the first value. 
// Then repeat this process until new value .length = 1. 

// Notes
// var euros = [29.76, 41.85, 46.5]; 
// var sum = euros.reduce( function(total, amount){
//   return total x amount
// });
// sum 118.11