/*
Required temperature for scarf prompt = any value less than zero (cold)
Required temperature for short sleeves prompt = any value greater than 15 (warmish)
*/

const temperature = -200;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


// MORE CONDITIONAL EXAMPLES BELOW 

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

const raining = true;
if (!raining) {
  console.log("Leave your umbrella at home!");
}