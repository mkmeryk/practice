//Write a script `capitalizeEvenLetters.js` that takes a word as an argument. 
//Upper case every even letter and lower case every odd letter of the word then log it.


//Example

//$ node capitalize_even_letters.js fish

//fIsH



//$ node capitalize_even_letters.js baratheon

//bArAtHeOn





//    ## Stretch
//Make the script work with a sentence as an argument.



//////////////////////Solution////////////////////////

let stringWord = process.argv[2];

const letter = stringWord.split("").join(' ').toLocalLowerCase();
let result = "";

for (let i = letter.length; i >= 0; i--) {

    if (i%2 == 0) {
        result += letter[i]
    } else {
        result += letter[i].toLocalUpperCase();
    }
    
}

console.log(result);