// Object contains other primary data type
// complex data type

// let student1 = {
//     firstName : "Suresh",
//     lastName : "Thakur",
//     address : "Balkumari",
//     gamil : "suresh@gmail.com"
// }
// console.log(student1);

// ? CRUD

// dot(.) operator
// square bracket [] operator

// let animalDetails = {
//     name : "Tiger",
//     age : "30"
// }

// add
// animalDetails.weight = "200kg";
// animalDetails["weight"] = "900kg";

// read
// console.log(animalDetails.age);

// update
// animalDetails.name = "Lion";
// console.log(animalDetails)

// delete
// delete animalDetails.name;
// console.log(animalDetails);



// ? example 2
// ?nested object
// let studentDetails = {
//     firstName : "Suresh",
//     lastName : "Thakur",
//     address : {
//         permanent : "A",
//         temporary : "B"
//     },

//     isGraduated : false,
//     image : null
// }
// console.log(studentDetails.address.permanent);
// console.log(studentDetails.address['temporary']);

// studentDetails.address.temporary = "abg";
// studentDetails.address.ghumnaJanaAddress = "Pokhara";
// console.log(studentDetails);

// delete studentDetails.address.temporary;
// console.log(studentDetails);


// ? Example 3

// let laptopDetails = {
//     name : "dell",
//     brand : "MSI",
//     ram : 16
// }

// let fieldName = "ram";
// console.log(laptopDetails[fieldName]);


// ? call back function 
// ? function which is passed as parameter to another function

const doSum = (x,y,print) =>{
    let sum = x+y;
    print(sum);

}
doSum(5,10,(value) => {
    console.log(value);
});


let myHouseDetails = {
    numberOfRooms : 100,
    numberOfMembers : 20,
    colorOfHouse : "Red",
    builtYear : 2024,
    numberOfStorey : 5
}
//  delete myHouseDetails.numberOfMembers;

 //console.log(myHouseDetails);
//  delete myHouseDetails.numberOfMembers;
 
//  myHouseDetails.numberOfRooms = myHouseDetails.numberOfRooms +2;
//  console.log(myHouseDetails);