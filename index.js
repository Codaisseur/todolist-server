const express = require("express");

const PORT = 4000;
const app = express();

const userRouter = require("./routers/user");
const todoListRouter = require("./routers/todoList");

const aaaaaAAAAA = (req, res, next) => {
  console.log("We happened in the middle");
  next();
};

const ffffffffs = (req, res, next) => {
  console.log("The random number", randomNumber);
  const randomNumber = Math.ceil(Math.random() * 10);

  if (randomNumber <= 3) next();
  if (randomNumber > 6 && randomNumber <= 9) res.status(401).send("FAILED!!");
};

const iiioooo = (req, res, next) => {
  const randomNumber = Math.ceil(Math.random() * 10);
  console.log("The random number", randomNumber);

  if (randomNumber <= 3) next();
  if (randomNumber > 3 && randomNumber <= 10)
    res.status(401).send("Not even my final form!!");
};

app.use(express.json()); // parses the body

app.use(ourMiddleWare);

app.get(
  "/",
  randomAuthMiddleware,
  anotherMiddleware,
  async (req, res, next) => {
    const template = `<html>
  <body>
  <h1>'Ciao from the API'</h1>
  </body>
  </html>`;
    res.status(200).send(template);
  }
);

app.get("/test", randomAuthMiddleware, (req, res) => {
  res.send("testing! :)");
});

app.use("/users", userRouter);
app.use(todoListRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
