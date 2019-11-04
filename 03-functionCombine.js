// We will combine strings now
console.log("Combining two strings through a function.");

// We shall recycle the array of strings
var a1 = ["coffee", "sickness", "javascript", "water"];
var a2 = ["dehydration", "javascript", "cat",  "kittens"];

var num1 = Math.floor(Math.random() * 4);
var num2 = Math.floor(Math.random() * 4);

function combineString (s1, s2){
  console.log(s1 + "-" + s2);
}

combineString(a1[num1], a2[num2]);
