const getTheTitles = function(arr) {
  let titles = [];
  for (let item of arr) {
    titles.push(item.title);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
