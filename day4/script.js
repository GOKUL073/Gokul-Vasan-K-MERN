
// ===================================
// PART A - CONDITIONAL STATEMENTS
// ===================================


// 1. Even or Odd

function checkEvenOdd() {

    let number = Number(document.getElementById("evenNumber").value);

    if (document.getElementById("evenNumber").value.trim() === "") {
        document.getElementById("evenResult").innerText = "Enter a number";
    }
    else if (number % 2 === 0) {
        document.getElementById("evenResult").innerText = "Even";
    }
    else {
        document.getElementById("evenResult").innerText = "Odd";
    }
}


// 2. Largest of Three Numbers

function findLargest() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "" ||
        document.getElementById("num3").value === ""
    ) {
        document.getElementById("largestResult").innerText = "Enter all three numbers";
    }
    else if (a >= b && a >= c) {
        document.getElementById("largestResult").innerText = "Largest: " + a;
    }
    else if (b >= a && b >= c) {
        document.getElementById("largestResult").innerText = "Largest: " + b;
    }
    else {
        document.getElementById("largestResult").innerText = "Largest: " + c;
    }
}


// 3. Leap Year

function checkLeapYear() {

    let year = Number(document.getElementById("year").value);

    if (document.getElementById("year").value === "" || year <= 0) {
        document.getElementById("leapResult").innerText = "Enter a valid year";
    }
    else if (year % 400 === 0) {
        document.getElementById("leapResult").innerText = "Leap Year";
    }
    else if (year % 100 === 0) {
        document.getElementById("leapResult").innerText = "Not a Leap Year";
    }
    else if (year % 4 === 0) {
        document.getElementById("leapResult").innerText = "Leap Year";
    }
    else {
        document.getElementById("leapResult").innerText = "Not a Leap Year";
    }
}


// 4. Electricity Bill

function calculateBill() {

    let units = Number(document.getElementById("units").value);
    let bill = 0;

    if (document.getElementById("units").value === "" || units < 0) {
        document.getElementById("billResult").innerText = "Enter valid units";
        return;
    }

    if (units <= 100) {
        bill = 0;
    }
    else if (units <= 200) {
        bill = (units - 100) * 2;
    }
    else if (units <= 500) {
        bill = (100 * 2) + (units - 200) * 5;
    }
    else {
        bill = (100 * 2) + (300 * 5) + (units - 500) * 8;
    }

    document.getElementById("billResult").innerText = "Bill: ₹" + bill;
}


// 5. Day Name using Switch

function findDay() {

    let day = Number(document.getElementById("day").value);
    let result;

    switch (day) {

        case 1:
            result = "Monday";
            break;

        case 2:
            result = "Tuesday";
            break;

        case 3:
            result = "Wednesday";
            break;

        case 4:
            result = "Thursday";
            break;

        case 5:
            result = "Friday";
            break;

        case 6:
            result = "Saturday";
            break;

        case 7:
            result = "Sunday";
            break;

        default:
            result = "Invalid day";
    }

    document.getElementById("dayResult").innerText = result;
}


// 6. Login Check

function loginCheck() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let correctUsername = "Gokul";
    let correctPassword = "12345";

    let isBlocked = false;

    if (isBlocked) {
        document.getElementById("loginResult").innerText = "Account blocked";
    }
    else if (username !== correctUsername || password !== correctPassword) {
        document.getElementById("loginResult").innerText = "Invalid credentials";
    }
    else if (!isBlocked && username === correctUsername && password === correctPassword) {
        document.getElementById("loginResult").innerText = "Welcome " + username;
    }
}


// ===================================
// PART B - LOOPS
// ===================================


// 1. Multiplication Table

function multiplicationTable() {

    let number = Number(document.getElementById("tableNumber").value);
    let result = "";

    if (document.getElementById("tableNumber").value === "") {
        document.getElementById("tableResult").innerText = "Enter a number";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        result += number + " x " + i + " = " + (number * i) + "\n";
    }

    document.getElementById("tableResult").innerText = result;
}


// 2. Sum of Digits using While Loop

function sumDigits() {

    let number = Math.abs(Number(document.getElementById("sumNumber").value));
    let sum = 0;

    if (document.getElementById("sumNumber").value === "") {
        document.getElementById("sumResult").innerText = "Enter a number";
        return;
    }

    while (number > 0) {

        let digit = number % 10;

        sum = sum + digit;

        number = Math.floor(number / 10);
    }

    document.getElementById("sumResult").innerText = "Sum: " + sum;
}


// 3. Reverse a Number without String Conversion

function reverseNumber() {

    let number = Number(document.getElementById("reverseNumber").value);
    let original = Math.abs(number);
    let reverse = 0;

    if (document.getElementById("reverseNumber").value === "") {
        document.getElementById("reverseResult").innerText = "Enter a number";
        return;
    }

    while (original > 0) {

        let digit = original % 10;

        reverse = reverse * 10 + digit;

        original = Math.floor(original / 10);
    }

    if (number < 0) {
        reverse = -reverse;
    }

    document.getElementById("reverseResult").innerText = "Reverse: " + reverse;
}


// 4. Palindrome String

function checkPalindrome() {

    let word = document.getElementById("word").value.toLowerCase();
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {

        reversed = reversed + word[i];
    }

    if (word === "") {
        document.getElementById("palindromeResult").innerText = "Enter a word";
    }
    else if (word === reversed) {
        document.getElementById("palindromeResult").innerText = "Palindrome: true";
    }
    else {
        document.getElementById("palindromeResult").innerText = "Palindrome: false";
    }
}


// 5. FizzBuzz

function fizzBuzz() {

    let result = "";

    for (let i = 1; i <= 30; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz\n";
        }
        else if (i % 3 === 0) {
            result += "Fizz\n";
        }
        else if (i % 5 === 0) {
            result += "Buzz\n";
        }
        else {
            result += i + "\n";
        }
    }

    document.getElementById("fizzResult").innerText = result;
}


// 6. Prime Number Check

function checkPrime() {

    let number = Number(document.getElementById("primeNumber").value);
    let isPrime = true;

    if (document.getElementById("primeNumber").value === "") {
        document.getElementById("primeResult").innerText = "Enter a number";
        return;
    }

    if (number <= 1) {
        isPrime = false;
    }
    else {

        for (let i = 2; i < number; i++) {

            if (number % i === 0) {

                isPrime = false;

                break;
            }
        }
    }

    if (isPrime) {
        document.getElementById("primeResult").innerText = number + " is Prime";
    }
    else {
        document.getElementById("primeResult").innerText = number + " is Not Prime";
    }
}


// 7. Count Vowels using for...of

function countVowels() {

    let sentence = document.getElementById("sentence").value.toLowerCase();

    let count = 0;

    for (let char of sentence) {

        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    document.getElementById("vowelResult").innerText = "Vowel Count: " + count;
}


// 8. Star Pattern using Nested Loops

function starPattern() {

    let result = "";

    for (let i = 1; i <= 4; i++) {

        for (let j = 1; j <= i; j++) {

            result += "* ";
        }

        result += "\n";
    }

    document.getElementById("starResult").innerText = result;
}
