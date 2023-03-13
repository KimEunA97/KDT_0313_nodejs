const numberChecker = require("./number-checker");


module.exports = function (first, second) {

  if (numberChecker(first) === true)
    return first + second;
}

// function add (first , second){

//   return first + second;

// }