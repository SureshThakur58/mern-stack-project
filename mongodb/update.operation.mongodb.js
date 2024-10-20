use("ncit-data");

// db.student.insertMany([
//   {
//     name: "Shreya Khanal",
//     address: "Kathmandu",
//     age: 21,
//     isGraduated: false,
//   },
//   {
//     name: "Kuber Pathak",
//     address: "Lalitpur",
//     age: 21,
//     isGraduated: true,
//   },

//   {
//     name: "Rajiv Khadka",
//     address: "Bhaktapur",
//     age: 21,
//     isGraduated: false,
//   },
// ]);


// ? operators
// ? $set

// ? update shreya age

// db.student.updateOne(
//     {
//         name:"Shreya Khanal",
//     },
// {
//     $set: {age: 15},
// });

// db.student.updateOne(
//     {
//         name:"Shreya Khanal",
//     },
// {
//     $set: {
//         name: "Suresh Thakur" 

//     },
// });

// db.student.updateOne(
//     {
//         _id: ObjectId("6666a25fdcb90e71559d59ef"),
//     },
// {
//     $set: {
//         name: "Salani Sah" 

//     },
// });

// ? update age of all student to 38
// db.student.updateMany({},
    
// {
//     $set: {
//         age:35 

//     },
// });

// ? incresase age of kuber by 10

// db.student.updateOne({
//     name:"Kuber Pathak"
// },
    
// {
//     $inc: {
//         age: 35 

//     },
// });

// ? decrease age of rajiv by 20
// db.student.updateOne({
//     name:"Kuber Pathak"
// },
    
// {
//     $inc: {
//         age:-35 

//     },
// });

// multiply by 4 times of kuber

// db.student.updateOne({
//     name:"Kuber Pathak"
// },
    
// {
//     $mul: {
//         age:4

//     },
// });

// ? divide by 2 times
// db.student.updateOne({
//     name:"Kuber Pathak"
// },
    
// {
//     $mul: {
//         age:1/2

//     },
// });

// db.student.updateOne({
//     name:"Dinesh Aryal"
// },
    
// {
//     $set: {
//         age:4,
//         address: "Balkumari"

//     },
    
// });


//  db.student.find();


