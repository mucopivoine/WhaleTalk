const input ='turpentine and turtles';
var vowels =['a','e','i','o','u'];
let resultArray = [];
for (let i=0; i<input.length;i++){
    let take = input[i];
    console.log(take + ' is :  ' + i);
for( let x=0; x<vowels.length; x++){
    let y = vowels[x];
if(take === y){
    console.log(take + '  is vowel');
}
if(take === 'e'){
resultArray.push('e');
}
if(take === 'u'){
    resultArray.push('u');
}
if(take === 'a'){
    resultArray.push('a');
}
if(take === 'i'){
    resultArray.push('i');
}
if(take === 'o'){
    resultArray.push('o');
}
}
}
// console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
