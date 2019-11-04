// Add random word to a sentence
console.log("Adding random word to a sentence.");

// Random incomplete sentence
var sent1 = "I like to eat "
var sent2 = " for lunch."

// List of something to eat
var a1 = ["pizza", "hamburger", "sushi", "steak", "spaghetti codes"]

// Random number from array
var num = Math.floor(Math.random() * a1.length);

console.log(sent1 + a1[num] + sent2);
