'use strict';

// let username = "tom";

function showMessage() {

  let username = "tim";

  let message = "Hello, " + username + "!";

  console.log(message);
}

function addNumsTogether(a, b) {
    return a + b;
}

// let sayItAgain = function sayWhatsUp() {
//     console.log("Whats up?");
// }

// sayItAgain();

// function sayWhatsUp() {
//     console.log("Whats up?");
// }

let sayWhatsUp = () => console.log("Whats up?");

// let sum = function(a, b) {
//     return a + b;
// }

// let username = prompt("What would you like to be called?", "Tom");

// let welcome = (username == "Tom") ?
//     () => alert('Hello, Tom.') :
//     () => alert('Hello, Stranger?');

let sum = (a, b) => a + b;

let sum = (a, b) => {
    let result = a + b;

    debugger;

    return result;
}

console.log(sum(2, 3));

i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

// console.log(username);

// showMessage();

// console.log(username);

// let result = addNums(2, 3);

// console.log(result);