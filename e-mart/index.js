import express from "express"
import connectDB from "./connect.db.js";
import productRoutes from "./product/product.router.js";
import useRoutes from "./user/user.controller.js";
import cors from "cors";
const app= express();

// to make app understand json
app.use(express.json());

// connect database
 connectDB() ;

//  TODO:CORS
// ?  CORS => cross origin resource sharing
app.use(cors());

// TODO: api version

// register routes
app.use(productRoutes);
app.use(useRoutes);

// network port and server
const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`App is listening on port ${PORT}`);
});