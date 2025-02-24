//We need a function that can transform a number into a string.
// What ways of achieving this do you know?

function numberToString(num) {
  return num.toString();
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return(-number);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Write a program that returns the age (0-9) as an integer.

-- Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number: 

function getAge(inputString){
  return parseInt(inputString);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool){
  return bool ? "Yes" : 'No'
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

// Return  sum of only positive values from array

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
} 
or
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {
let arr = []
for(let i = 0; i <= n; i++) {
  arr.push(Math.pow(2, i))
  }
  return arr
  }
  console.log(powersOfTwo(4)) // returns [1,2,4,8,16]
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------
 ----------------------------------------------------------------------------------------------------------------------------------------------

//Repeat a given string a specific number of times:

function repeatStr (num, str) {
return str.repeat(num)
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

// -- Nathan loves cycling.
// -- Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// //You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time * 0.5);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = numbers => numbers.reduce((acc, num) => acc + (num * num), 0)

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Given an array of integers, return a new array with each value doubled.

function maps(x){
  return x.map(n => n * 2);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- Remove all spaces from a given string:

function noSpaces(x) {
return x.split(' ').join('')

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
-- Given a year, return the century it is in.

const century = year => Math.ceil(year/100)

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function(str){
  return parseInt(str);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?



function makeNegative(num) {
  return -Math.abs(num);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- Convert a boolean value to its string equivalent (true -> "true").

function booleanToString(b){
  return b.toString();
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

  The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
  
  function basicOp(char, value1, value2)
{
switch(char) {
  case '+':
     return value1 + value2;
    break;
  case '-':
     return value1 - value2
    break;
  case '*':
     return value1 * value2
    break;
  case '/':
     return value1 / value2
}
}

console.log(basicOp('+', 4, 7))
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Return a greeting statement that uses an input. 
  
  function greet(name) {
  return `Hello, ${name} how are you doing today?`
}
  
 ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
 // Convert a number to a reversed array of digits
  
  function digitze(n) {
    return String(n).split("").map(Number).reverse()
}
  
 ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
  
function greet(name) {
 if(name === "Johnny") {
   return "Hello, my love!"
} else {
  return "Hello, " + name + "!"
}
}
  

 ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
 // Write a function that returns a string in which firstname is swapped with last name.

  
 function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}


 ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
//Check if number n is divisible by both x and y. 

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
 //I got them at the same time as kitten/puppy. That was humanYears years ago.
//Return their respective ages now as [humanYears,catYears,dogYears] 
  
  const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}

  
---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
//Complete the function which converts a binary number (given as a string) to a decimal number.  

function binToDec(bin){
  return parseInt(bin,2);
}  

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const invert = array => array.map(num => -num);
  
---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
} 

----------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------
  
//For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}

----------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------

//Count the postive numbers in the array, and sum the negatives. Return in an array.

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
} //should return [10,-65]

----------------------------------------------------------------------------------------------------------------


function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
  
  //returns 'found the needle at position #'
  
  ----------------------------------------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------------------------------------
  
  //get the average sum of an array of numbers, and return the sum rounded down to the nearest integer. 
  
  function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
  
    ----------------------------------------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------------------------------------

   // reverse a string 
    
  function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}  
  
 ----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

  
  function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
//returns [01011110001100111]
  
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

 // Convert a string into all uppercase.
  
  const makeUpperCase = str => str.toUpperCase();
  
  
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
  
// Return the number (count) of vowels in a given string. (first 7kyu, first tryyy)

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//Write a function which calculates the average of the numbers in a given list.
 
function find_average(array) {
  // your code here
  if(array.length == 0) {
    return 0
  }
  let sum = []
      sum = array.reduce((acc,c) => (acc + c), 0)
  return sum / array.length
}
  
  
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
  //A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
 let vowels = ['a', 'e', 'i', 'o', 'u']
 
 return str.split('').filter(function(elem) {
   return vowels.indexOf(elem.toLowerCase()) == -1
 }).join('')
}

----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]
 
const reverseSeq = n => {
  let nA= [];
for(let i = n; i > 0; i--) {
nA.push(i)
}return nA
};


----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

// return sum of numbers in a given array. Return 0 if no values in array.

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

  
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.  
  
function plural(n) {
  return n === 1 ? false : true;
}  
  
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
 // Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  var miliseconds = 0;
  miliseconds = miliseconds + s * 1000;
  miliseconds = miliseconds + m * 60000;
  miliseconds = miliseconds + h * 3600000;
  return miliseconds;
}
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

//Example: [4,6,2,1,9,63,-134,566] -> max = 566, min = -134

var min = function(list){
    
  return Math.min.apply(null, list);
}

var max = function(list){
  
  return Math.max.apply(null, list);
}

----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 ==0) ? r : (x*x)
  })
}
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  // your code here
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}
  ----------------------------------------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------------------------------------
  //been too long
  
  //function getmotivated() {
  //return do it for future me
}
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//Convert the boolean value passed into b, to a string.

function booleanToString(b){
  return b.toString();
}
  
----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//Your task is to sum the differences between consecutive pairs in the array in descending order. 
//In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0

const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);

----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
//OTher sum of arrays soultion.
function sumOfDifferences(arr) {
  arr.sort((a, b) => a - b);
  let b = 0;
  for(let a = arr.length - 1; a > 0; a--) {
    b += arr[a] - arr[a - 1];
  }
  return b;
}

----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
//Square every digit of the string

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//We need a function that can transform a string into a number. What ways of achieving this do you know?

function(str){
  // put your code here
  return Number(str);
}

----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
//You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'

function defineSuit(card) {
if(card.includes('♥')) return 'hearts'
if(card.includes('♦')) return 'diamonds'
if(card.includes('♣')) return 'clubs'
if(card.includes('♠')) return 'spades' 
}


----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}


----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//"String" -> "SSttrriinngg"


const doubleChar = (str) => str.split("").map(c => c + c).join("");

-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
