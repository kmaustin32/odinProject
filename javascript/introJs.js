// First Assignment for Javascript:

console.log(23 + 97);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9 * a);

let b = 7 * a;
console.log(b);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;
console.log(percentage);

// Second Assignment for Javascript

console.log("This is JS Lesson #2");

// Length property str.length
let name = "Keenan";
console.log(`The length of the name "Keenan" is ${name.length}.`);

// Extract sections of strings with the following methods:
// slice(start, end) exclusive, so add one to the last character.
  // a single argument picks the start, negative starts at end.
// substring(start, end)
// substr(start, length)

let shoppingList = "Apple, Banana, Cake, Duck, Eggs";

let sliced = shoppingList.slice(0, 13);
let negSliced = shoppingList.slice(-25, -12);
console.log("sliced: " + sliced, negSliced);

let subbed = shoppingList.substring(15, 19);
console.log("subString: " + subbed);

let shortSub = shoppingList.substr(7, 6);
console.log("substr: " + shortSub);

// replace method is replace(old, new). It does not alter original string. Rather, it returns a new string.  

let testStr = "Tomatoes grow in the ground and are good for french fries.";
let replStr = testStr.replace("Tomatoes", "Potatoes")
console.log(`old string: ${testStr}
new string: ${replStr}`);

// To match all, use / /g. str.replace(/Tomatoes/g, "Potatoes");
// Also, str.replaceAll("str1", "str2") is a thing. 

// Change case of whole string:
let hello = "Hello, World!"
console.log(hello.toUpperCase());
console.log(hello.toLocaleLowerCase());

// Concatenate strings. 
let text1 = "I am the";
let text2 = "big fly";
let text3 = text1.concat(" ", text2 + "!!!");
console.log(text3);

// trim() removes whitespace. kinda like rstrip?
// trimEnd() will just cut the end off. 
let spacey = "     I am Kevin     ";
console.log(spacey);
console.log(spacey.trim());

// https://www.w3schools.com/js/js_string_methods.asp for padding strings. 

//str.padStart(num, "char"); Pads until the given length. You can do the same on end with .padEnd();
let unpad = '5';
console.log(unpad.padStart(12, "xo"));

// Extract characters and charcodes with charAt(index) and charCoadeAt(index)
console.log("The sixth character of text3 is " + text3.charAt(6) + " and the character code of that letter is " + text3.charCodeAt(6)) + ".";

console.log(`The ninth character of text3 is ${text3.charAt(9)} and the character code of that letter is ${text3.charCodeAt(9)}.`);

// You can also use the same syntax for accessing an element in an array, arr[x], but this has some pitfalls. 
console.log(text1[2]);

//Convert a string to an array with split(char). This will split the string on the selected character. If you do not add char, the return is an array with the full string at position 0. If you split with "", then each character will become an element. 

let sentence = "I am a big fluffy and spiky hedgehog";
let senArr = sentence.split(" ");
console.log(`This is a split string: ${senArr}.`)
console.log(typeof senArr);
console.log(senArr);

// REMEMBER THAT AN ARRAY WITHIN A STRING LITERAL DOESN'T CONTAIN BRACKETS IN TERMINAL!!!