//Largest of three numbers

//Write a script `largestOfThree.js` that takes three numbers as arguments 
//then logs the largest of the three numbers as "The largest number is X".



//Example usage:

//$ node largestOfThree.js 5 789 234

//The largest number is 789

//solution



let nam1 = process.argv[2];
let nam2 = process.argv[3];
let nam3 = process.argv[4];

console.log("The largest number is: ", (Math.max(nam1, nam2, nam3)));



