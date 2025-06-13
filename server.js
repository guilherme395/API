import express from "express";
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

server.listen(3000, () => {
  console.log("Server is running on 3000");
});
