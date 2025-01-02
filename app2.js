// //Q1

const info = [];
const items = [];

let userName = prompt("Enter your Name please :");


const parentElement = document.getElementById('parentDiv');
const newP = document.createElement('p');
newP.textContent = userName;
parentElement.appendChild(newP);

info.push(userName);
let Gender;

while (true) {
  Gender = prompt("Enter Your Gender please:");
  if (Gender === "male" || Gender === "female") {
    break;
  } else {
    alert("Invalid input. Please enter 'male' or 'female'.");
  }
}
if (Gender === "male") {
  items.push(Gender);
  info.push(Gender);

} else if (Gender === "female") {
  info.push(Gender);
  items.push(Gender);

}

let orderChoice = prompt("Would you like to order shawarma, zinger, or burger");

items.push(orderChoice);
info.push(orderChoice);



  const orderedList = document.createElement('ol');


  for (let i = 0; i < items.length; i++) {
      const listItem = document.createElement('li'); // Create <li>
      listItem.textContent = items[i]; // Set the text of the list item
      orderedList.appendChild(listItem); // Add the <li> to the <ol>
  }

  document.getElementById('list-container').appendChild(orderedList);

for (let i = 0; i < info.length; i++) {

  console.log(info[i]);

}
const parent = document.getElementById('h3');
let hero= document.createElement('h3');
hero.textContent = "hello this is the hero";
parent.prepend(hero);



// // Q2
// for (let i = 0; i <= 5; i++) {
//     alert(i);
// }

// // Q4
// let number;
// while (true) {
//     number = prompt("Please enter a number between 0 and 100:");

//     if (number >= 0 && number <= 100) {
//         break;
//     } else {
//         alert("input error. Please enter a number between 0 and 100.");
//     }
// }
// alert( `Thank you! You entered a valid number: ${number}`);


// // Q5
// let sum = 0;
// let number2 = prompt("Please enter an integer:");

// for (let i = 0; i <= number2; i++) {
//   sum += i;
// }
// alert(`The sum of integers from 0 to ${number2} is: ${sum}`);





