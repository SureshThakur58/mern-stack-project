// block of code organized together to perform specific action
// DRY => don't repeat yourself

// syntax

// function function_name(){
    // some code here
// }

// function addNumber(){
//     let sum=3+5;
//     console.log(sum)
// }
// addNumber();

// function addNumber(a,b){
//     let sum=a+b;
//     console.log(sum)
// }
// addNumber(6,9);
// addNumber(9,9);
// addNumber(3,9);


// function sujata(){
//     console.log("ghfhgjg")
// }
// sujata();



// function suresh(){
//     console.log("abcdefghijklmnopqrstuvwxyz")
// }
// suresh();

//  hosting => pull up

// symbol()
// function symbol(){
//     console.log("hiiii")

// }


// var x=5
// console.log(x);


// let x=5;
// console.log(x)

// ? arrow function

// const greetUser = (userName) =>{
//     console.log(`Good afternoon ${userName}`);
// };
// greetUser('Suresh');

// const calculateProduct = (x,y)=>{
//     let product=x*y;
//    return product;
// }
//  let pro = calculateProduct(5,6);
// console.log(pro);

// const checkOddEven = (x)=>{
    
//     if(x%2===0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
    
// }
// let y = checkOddEven(9);
// console.log(y);

// WAP to return division
//  one line code
// const doDivision = (x,y) => x/y;
// const division = doDivision(10,5);
// console.log(division)

// const checkOddEven = (num) => (num%2===0 ? "even" : "odd");

// const x=checkOddEven(9);
// const y=checkOddEven(8);
// console.log(x,y);


// WAP that accept first name and last name as input and return full name

const getName = (firstName,lastName) => {
    //let fullName = `${firstName} ${lastName}`;
    let fullName = firstName + ' ' + lastName;
    return fullName;


}
let first = getName("Suresh","Thakur");
console.log(first);

