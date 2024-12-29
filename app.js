let username = prompt("enter your name")
let gen = prompt("enter your gender")
if( gen === "male"){ 
alert(`welcome mr ${username}`)
} else if(gen === "female") {
    alert (`welcome ms ${username}`)
}else {
    alert(`welcome to the restaurant ${username}`)
}
let order = prompt("what would you like to order a shawarma, zinger, or burger")
let name = prompt(" write the name of the order.")
alert(order+"your order is being prepared")
console.log(username+order)

//q2
let number = prompt("enter your number");

switch (yournumber){
    case 1:
        num = "ONE";
        break;
    case 2:
        num = "TWO";
        break;
    case 3:
        num = "THREE";
        break;
    case 4:
        num = "FOUR";
        break;
    case 5:
        num = "FIVE";
        break;
    case 6:
        num = "SIX";
        break;
    case 7:
        num = "SEVEN";
        break;
        case 8:
            num = "EIGHT";
            break;

            case 9:
                num = "NINE";
                break;

    default:
        num = "PLEASE TRY AGAIN ";
}

alert(" Number variable: " + num);

