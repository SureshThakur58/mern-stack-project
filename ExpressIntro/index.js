import express from "express";

const app = express();
// ?to make app understand json
app.use(express.json());

// ? api
// app.get("/", (req, res) => {
//   return res.status(200).send("My first API....");
// });

// app.get("/hi", (req, res) =>{
//     return res.status(200).send("hii Naresh...");
// });

let userList = [
  {
    id: 1,
    name: "Suresh",
    age: 23,
  },
  {
    id: 2,
    name: "dinesh",
    age: 24,
  },
];

//  add user
app.post("/user/add", (req, res) => {
  const newUser = req.body;
  userList.push(newUser);
  return res.status(200).send({ message: "User is added sucessfully" });
});

// ? get users
app.get("/user/list", (req, res) => {
  return res.status(200).send(userList);
});

// ? delete a user
app.delete("/user/delete/:userId", (req, res) => {
  // extract user id to be deleted
  const userId = Number(req.params.userId);

  // find user
  const requiredUser = userList.find((item, index, self) => {
    if (item.id === userId) {
      return item;
    }
  });

  // if not user, throw error
  if (!requiredUser) {
    return res.status(404).send({ message: "User does not found" });
  }

  // delete user
  const newUserList = userList.filter((item, index, self) => {
    if (item.id !== userId) {
      return item;
    }
  });
  //  replace user list with new user list
  userList = structuredClone(newUserList);

  // ? send response
  return res.status(200).send({ message: "User is deleted sucessfully." });
});
//  network port and server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

// ctrl c is used to stop the running terminal for listening on port
