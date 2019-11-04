// Console log testing
console.log("Are the strings euqal?");

// Creating arrays of strings
var array1 = ["coffee", "sickness", "javascript", "water"];
var array2 = ["dehydration", "javascript", "cat",  "kittens"];

/*
  Math.random returns any random number btw 0 to 1
  Therefore, we multiply by 4 and round it with
  Math.floor for a random integer btw 0 to 3
  "Referenced w3schools"
*/
var num1 = Math.floor(Math.random() * 4);
var num2 = Math.floor(Math.random() * 4);

/*
  Fetching strings from the array corresponding to the
  random integer btw 0 to 3 as there are 4 items in
  each array
*/
console.log(array1[num1], array2[num2]);

/*
  Referenced w3schools on String localeCompare()
  The return values will be (-1, 0, 1) and 0 is when
  the strings are equal, the others are about order
  of the strings which I won't think too much about for
  the purpose of this assignment
*/
var n = array1[num1].localeCompare(array2[num2]);

// console.log(n);

// Simply check if number is 0 or not to see if they are equal
if (n === 0){
  console.log("The strings are equal.");
} else{
  console.log("The strings are not equal.");
}
