import mongoose from "mongoose";

const dbUserName = "suresh58";
const dbPassword = encodeURIComponent ("suresh$143");
const dbName = "ncit-netflix";
const dbHost = "suresh58.zpzn6ns.mongodb.net";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=Suresh58`
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB ;
