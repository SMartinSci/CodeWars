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