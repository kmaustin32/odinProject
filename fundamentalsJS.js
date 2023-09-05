function testFunction() {
  console.log("this is a test!")
}

testFunction();

const another = (var1) => {
  return var1 + " boogabooga"
}

console.log(another('chalupe'));

const hello = () => {
  return "Hello, World!"
}

var username = "Farilla";

console.log(hello());
// console.log(username);
function checkName(user) {
  if (!user) return "Challabunga";

  return user.toString();
}

function spellMe(str) {
  for (let i=0; i<str.length; i++) {
    console.log(str[i])
  }
}

const singleLine = (str1) => { console.log(str1 + " from singleLine") };
singleLine(username);

console.log(checkName(username));
spellMe('Keenan is Ezra and they are a banana');

var sides = 3
var triangle = sides = 3 ? true : false;

console.log(triangle);

const cycle = (str3) => {
  arr1 = []
  for (let i=0; i<str3.length; i++) {
    str3[i] == "e" ? arr1.push("EELZ") : arr1.push("Swolo");
  }
  return arr1
}

console.log(cycle("keenan"));