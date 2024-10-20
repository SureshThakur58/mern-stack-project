// db name
use("ncit");

// create

// ? insertOne
// to add single document
// db.student.insertOne({
//     name: "Suresh",
//     age: 21,
//     address: "Balkumari"
// });

// ? insertMany
//  to add many documents

// db.student.insertMany([
//     {
//     name: "Naresh",
//     age: 22,
//     address: "Balkot"
// },
// {
//     name: "Naresh2",
//     age: 22,
//     address: "Balkot"
// }
// ]);

// to read all data
// db.student.find();

// ? to read single data
//db.student.findOne({name:"Suresh"})

// db.student.deleteOne({ name:"Naresh"});

// to delete multiple data
// db.student.deleteMany({ age: 22});
// db.student.find();

// ? edit single data
// db.student.updateOne(
//     { name: "Naresh"},
//     {
//         $set: {
//             address:"palpa"
//         }
//     }
// );

// ? to edit multiple data
//db.student.updateMany(
//   {
//     age: 22,
//   },
//   {
//     $set: {
//       address: "Pokhara",
//     },
//   }
// );

//db.student.find();
