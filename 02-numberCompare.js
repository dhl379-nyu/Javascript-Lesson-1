// Here is the question of the day
console.log("Are the numbers equal?");

/*
  Same as before in 01-stringCompare.js except
  we multiply by 10 for an integer btw 0 to 9
*/
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);

// Displaying what numbers were fetched by random
console.log(num1, num2);

// Notifying if integers are equal, greater, or smaller
if (num1 == num2){
  console.log("The numbers are equal.");
} else if (num1 < num2){
  console.log("It's smaller than the following number.");
} else if (num1 > num2){
  console.log("It's greater than the following number.");
}
