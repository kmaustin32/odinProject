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

console.log(checkName(username));
spellMe('Keenan is Ezra and they are a banana');