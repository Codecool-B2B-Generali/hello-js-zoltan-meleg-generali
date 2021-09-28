// task #1
alert('Hello World - Alert');
console.log('Hello World - Console');

// task #2
let hour = new Date().getHours();
console.log(hour);

// task #3-4
let firstNum = prompt('Please enter a number', 0);
if (isNaN(firstNum)) {
  alert('error for the first input');
} else {
  let secondNum = prompt('Please enter a number', 0);
  if (isNaN(secondNum)) {
    alert('error for the second input');    
  } else {
    let result = +firstNum + +secondNum;
    alert(result);
  }
}

// task #5
let userWord = prompt('Type a word');
for (let char of userWord) {
  console.log(char);
}

// task #6
let userWords = prompt('Type something');
let numberOfLetters = 0;
for (let char of userWords) {
  if (char !== ' ')
    numberOfLetters++;
}
console.log(numberOfLetters);

// task #7
let userString = prompt('Type a word');
let reverseString = '';
for (let index = userString.length-1; index >= 0; index--) {
  reverseString += userString[index];
}
console.log(reverseString);

// task #8
let userNumber = prompt('Type a number', 0);
let sumOddNumbers = 0;
if (isNaN(userNumber)) {
  console.log('invalid number');
} else {
  for (let i = 1; i <= userNumber; i++) {
    if ( i % 2 !== 0) {
      sumOddNumbers += i;
    }
  }
}
console.log(sumOddNumbers);
