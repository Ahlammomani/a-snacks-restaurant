// Q1
let username = prompt("enter your name")

let gen;
while (true) {
    gen = prompt("enter your gender");
    if (gen == "male" || gen == "female") {
        break;

    } else {

        alert("input error")
    }

}

if (gen === "male") {
    alert(`welcome mr ${username}`)
} else if (gen === "female") {
    alert(`welcome ms ${username}`)
} 

// Q2
for (let i = 0; i <= 5; i++) {
    alert(i);
}

// Q4
let number;
while (true) {
    number = prompt("Please enter a number between 0 and 100:");

    if (number >= 0 && number <= 100) {
        break;
    } else {
        alert("input error. Please enter a number between 0 and 100.");
    }
}
alert( `Thank you! You entered a valid number: ${number}`);


// Q5
let sum = 0;
let number2 = prompt("Please enter an integer:");

for (let i = 0; i <= number2; i++) {
  sum += i;
}
alert(`The sum of integers from 0 to ${number2} is: ${sum}`);



