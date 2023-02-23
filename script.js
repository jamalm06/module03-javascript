"use strict";
// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charcSet = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialChar: "!@#$%^&*()_+~\`|}{[]:;?><./-="
};

// creating array for user choice
var userChoice = [];

//converted object key values into arrays 
var low = charcSet.lowerCase.split("");
var up = charcSet.upperCase.split("");
var num = charcSet.numbers.split("");
var spec = charcSet.specialChar.split("");

//concatenated array for possible password conbinations
var lowUp = low.concat(up);
var lowNum = low.concat(num);
var lowSpec = low.concat(spec);
var upNum = up.concat(num);
var upSpec = up.concat(spec);
var numSpec = num.concat(spec);
var lowUpNum = lowUp.concat(num);
var lowUpSpec = lowUp.concat(spec);
var lowNumSpec = lowNum.concat(spec);
var upNumSpec = upNum.concat(spec);
var lowUpNumSpec = lowUpNum.concat(spec);

//created function for generating password
function generatePassword() {
  var userInput = window.prompt("How many characters you need in password, between 8 and 128:");
  //converting user input in number
  var length = parseInt(userInput);
  if (!length) {
    return generatePassword();
  } else if (length < 8 || length > 128) {
    window.alert("Please make a choice in creteria")
    return generatePassword();
    // } else if (length !== number) {
    //   window.alert("Please type in numerbs only")
  } else {
    var optionLow = window.confirm("do you need lowercase ?")
    var optionUp = window.confirm("do you need Uppercase ?")
    var optionNum = window.confirm("do you need numbers ?")
    var optionSpec = window.confirm("do you need special charcters ?")
  };
  if (!optionLow && !optionUp && !optionNum && !optionSpec) {
    window.alert("Please make a choice in creteria")
    return generatePassword();
  }

  if (optionLow) {
    userChoice = low;
  }
  if (optionUp) {
    userChoice = up;
  }
  if (optionNum) {
    userChoice = num;
  }
  if (optionSpec) {
    userChoice = spec;
  }
  if (optionLow && optionUp) {
    userChoice = lowUp;
  }
  if (optionLow && optionNum) {
    userChoice = lowNum;
  }
  if (optionLow && optionSpec) {
    userChoice = lowSpec;
  }
  if (optionUp && optionNum) {
    userChoice = upNum;
  }
  if (optionUp && optionSpec) {
    userChoice = upSpec;
  }
  if (optionNum && optionSpec) {
    userChoice = numSpec;
  }
  if (optionLow && optionUp && optionNum) {
    userChoice = lowUpNum
  }
  if (optionLow && optionNum && optionSpec) {
    userChoice = lowNumSpec;
  }
  if (optionLow && optionUp && optionSpec) {
    userChoice = lowUpSpec
  }
  if (optionUp && optionLow && optionSpec) {
    userChoice = upNumSpec;
  }
  if (optionUp && optionNum && optionSpec) {
    userChoice = upNumSpec;
  }
  if (optionLow && optionUp && optionNum && optionSpec) {
    userChoice = lowUpNumSpec;
  }

// // var x =length;
// // var y = userChoice;
// var pass = [];
// function randomM(x = length, y = userChoice){
//   for (var i = 0; i <= x; i++) {
    
//     pass.push(y[Math.floor(Math.random() * y.x)]);
//  }
//  return pass.join("");
// }

// randomM(length, userChoice);

  var pass = [];

  //creating random array as per user creteria
  for (var i = 0; i <= length; i++) {
    pass.push(userChoice[Math.floor(Math.random() * userChoice.length)]);
  }
  return pass.join("");
}
