//Problem:
// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized.

//Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function toCamelCase(str){
  let string = str.replace(/[^A-Z0-9]/ig, " ");
  let splitArr = string.split(' ');
 let newArr = splitArr[0]; 
  for (let i=1; i<splitArr.length; i++) {
    if (splitArr[i].match(/^[A-Z]+$/i)) {
       let output= splitArr[i][0].toUpperCase() + splitArr[i].slice(1);
        newArr+= output; 
    } 
  }
  return newArr;
};