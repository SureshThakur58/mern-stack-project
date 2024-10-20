import express from "express";
import connectDB from "./db.connect.js";
import Movie from "./movies.model.js";
import mongoose from "mongoose";

const app = express();

// to make app understand json
app.use(express.json());

//  connect db
connectDB();

// apis
// add movies
app.post("/movie/add", async (req, res) => {
  // extract new movie from req body
  const newMovie = req.body;

  // add movie to db
  await Movie.create(newMovie);

  // send res
  return res.status(201).send({ message: "Movie is added sucessfully." });
});

// get all movies
app.get("/movie/list", async (req, res) => {
  const movies = await Movie.find();
  return res.status(208).send({ message: "success", movieList: movies });
});

// ?Delete movies by id

app.delete("/movie/delete/:id", async (req, res) => {
// extract id from req.params
const movieId = req.params.id;

// check for mongo id validity
const isValidMongoId =mongoose.isValidObjectId(movieId);

// if not valid mongo id, throw error
if(!isValidMongoId){
  return res.status(400).send({message:"Invalid mongo id" });
}

// find movie using movie id
const movie = await Movie.findOne({_id: movieId});

// if not movie then throw error
if(!movie){
  return res.status(404).send({message:"Movie does not exist." });
}

// delete movie
await Movie.deleteOne({_id: movieId});
return res.status(200).send({message:"Movie is deleted successfully" });
});

// ? get movie by id

app.get("/movie/detail/:id", async (req, res) => {
  // extract movie id from req.params
const movieId = req.params.id;

// check for mongo id validity
const isValidMongoId =mongoose.isValidObjectId(movieId);

// if not valid mongo id, throw error
if(!isValidMongoId){
  return res.status(400).send({message:"Invalid mongo id" });
}

// find movie using movie id
const movie = await Movie.findOne({_id: movieId});

// if not movie then throw error
if(!movie){
  return res.status(404).send({message:"Movie does not exist." });
}

// send movie as response
return res.status(200).send({message:"Success", movieDetail: movie });

});

// ? edit movie  (only the one which should be edited that data should be written postman)
app.put("/movie/edit/:id", async (req, res) => {
  // extract movie id from req.params
  const movieId = req.params.id;

  // check for mongo id validity
  const isValidId = mongoose.isValidObjectId(movieId);

  //  if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id." });
  }

  // find movie by movie id
  const movie = await Movie.findOne({ _id: movieId });

  // if not movie, throw error
  if (!movie) {
    return res.status(404).send({ message: "Movie does not exist." });
  }

  // extract new values from req.body
  const newValues = req.body;

  // edit movie
  await Movie.updateOne(
    { _id: movieId },
    {
      $set: {
        ...newValues,
      },
    }
  );

  // send res
  return res.status(200).send({ message: "Movie is updated successfully." });
});

// network port and server
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App is Listening on port ${PORT}`);
});