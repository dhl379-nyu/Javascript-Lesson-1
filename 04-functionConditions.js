// I don't know what to ask anymore
console.log("Spaghetti codes for cocktail of bugs.");

// Giving some conditions to the function
function spaghetti(num){
  if (num == 0){
    return "99 bugs in the code."
  }
  else if (num == 1){
    return "127 bugs in the code."
  }
  else {
    return "Spaghetti codes."
  }
}

// Generate 0, 1, 2 for possible num
var num = Math.floor(Math.random() * 3);

// console.log(num);

// Output result
console.log(spaghetti(num));
