
// let username = prompt("enter your name")
// proper_place();
// let order = prompt("what would you like to order a shawarma, zinger, or burger")
// let name = prompt(" write the name of the order.")
// alert(order+"your order is being prepared")
// console.log(username+order)
// let age = prompt("enter your age")
// alert("Your age is: " + age)


//q2
// let number = prompt("enter your number");

// switch (yournumber){
//     case 1:
//         num = "ONE";
//         break;
//     case 2:
//         num = "TWO";
//         break;
//     case 3:
//         num = "THREE";
//         break;
//     case 4:
//         num = "FOUR";
//         break;
//     case 5:
//         num = "FIVE";
//         break;
//     case 6:
//         num = "SIX";
//         break;
//     case 7:
//         num = "SEVEN";
//         break;
//         case 8:
//             num = "EIGHT";
//             break;

//             case 9:
//                 num = "NINE";
//                 break;

//     default:
//         num = "PLEASE TRY AGAIN ";
// }

// alert(" Number variable: " + num);

//EX
//1
// let array=[]
// array.push(username)
// array.push(gen)
// array.push(order)
// //2
// for (let i=0; i<= array.length; i++ ){
//     console.log(array[i])
// }
// function proper_place (){
//     let gen = prompt("enter your gender")
//     if( gen === "male"){ 
//         alert(`welcome mr ${username}`)
//         } else if(gen === "female") {
//             alert (`welcome ms ${username}`)
//         }else {
//             alert(`welcome to the restaurant ${username}`)
//         } 
// }



let nameInput = document.getElementById("Name");
let genderInput = document.getElementById("Gender");
let ageInput = document.getElementById("Age");
let output = document.getElementById("output");

let shawarma = document.getElementById("shawarma");
let zinger = document.getElementById("zinger");
let burger = document.getElementById("burger");

let sandwich = document.getElementById("sandwich");
let combo = document.getElementById("combo");

let clickButton = document.getElementById("click");


clickButton.addEventListener("click", (e) => {
    e.preventDefault();

   
    let name = nameInput.value;
    let gender = genderInput.value;
    let age = ageInput.value;

   
    let order = "";
    if (shawarma.checked) order = shawarma.value;
    else if (zinger.checked) order = zinger.value;
    else if (burger.checked) order = burger.value;


    let sizes = [];
    if (sandwich.checked) sizes.push(sandwich.value);
    if (combo.checked) sizes.push(combo.value);


    output.textContent = `
        Name: ${name}
        Gender: ${gender}
        Age: ${age}
        Order: ${order}
        Size: ${sizes.join(", ")}
    `;
});

