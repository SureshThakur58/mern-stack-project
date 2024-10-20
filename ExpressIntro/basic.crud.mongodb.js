use("ncit");
// db.movies.find().count();

// ? mongodb read operation
// ? operator

// comparison operator
// ? $eq, $ne, $lt, $lte, $gt, $gte

// ? $eq (===)
//db.movies.find({name: { $eq: "Bitten"}});
// alternative
//db.movies.find({ name: "Bitten"});
// ? $ne(not equal to)
// db.movies.find({name : { $ne: "Bitten"}});

// ? $lt(less than)
// db.movies.find({ id: { $lt: 10}}, {_id:0, name: 1, id:1});

// ? $gt(greater than)
// db.movies.find({ id: { $gt: 20}}, {_id:0, name: 1, id:1});

// ? logical operator
//  $and, $or, $not

// db.movies.find({
//     $and:[
//         {genres: "Drama"},
//         {
//             runtime: 60,
//         },
//     ],
// }, {_id:0,id:1, genres:1,runtime:1});
//? alternative code for and
// db.movies.find({ genres: "Drama", runtime: 60}, {_id:0,id:1, genres:1,runtime:1});

// ? $or
// ? find movies whose language is english and rating greater than 9

// db.movies.find(
//     {
//         $or: [ { language: "English"},
//             {"rating.average": {$gt:9}}
//         ],
//     },
//     {
//         name: 1,
//       rating:1,  (any one)
//        avgRating:"$rating.average",
//         language:1,
//     }
// );

// ? $not
// db.movies.find({ language: { $ne:"English"}});

// ? $nor
// db.movies.find({ $nor: [
//     {genres: "Drama"},
//     { runtime: 60},
// ]});

// ? evaluation
// ? $regex

// db.movies.find({ summary: { $regex: "dance competition", $options: "i"}});

// ? array operator
// ? $size, $all, $elemMatch

// $size does not accept range
// db.movies.find({ genres: { $size: 2}});

// ? $all
// db.movies.find({ $and: [
//     {genres: "Drama"},
//     {genres: "Comedy"}
// ]});
// alternative code
// db.movies.find({ genres: { $all: ["Drama","Comedy","Action"]}});

// Find the movies whose network country code is "US"
// db.movies.find({ "network.country.code": "US"});

// ? 2.  find movies whose rating is greater than 6 and less than 7

// db.movies.find({ "rating.average": { $gt: 6, $lt:7}});

// ?3. find movies whose genre includes Drama and Mystery
// db.movies.find({

// })

// ?4. find movies whose language is English and rating is greater than 9
// ?5. find movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9
