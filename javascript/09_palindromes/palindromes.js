const palindromes = function (string) {
  let punctuation = /[.,?!\s]/g;
  let newString = string.replace(punctuation, '').toLowerCase();
  
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] != newString[newString.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
