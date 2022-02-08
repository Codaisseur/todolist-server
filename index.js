const express = require("express");

const PORT = 4000;
const app = express();

const userRouter = require("./routers/user");
const todoListRouter = require("./routers/todoList");

const randomAuthMiddleware = (req, res, next) => {
  const randomNumber = Math.ceil(Math.random() * 10);
  console.log("The random number", randomNumber);

  if (randomNumber <= 5) next();
  if (randomNumber > 5 && randomNumber <= 10) res.status(401).send("FAILED!!");
};

const justAnotherMiddleware = (req, res, next) => {
  const randomNumber = Math.ceil(Math.random() * 10);
  console.log("The random number", randomNumber);

  if (randomNumber <= 3) next();
  if (randomNumber > 3 && randomNumber <= 10)
    res.status(401).send("Not even my final form!!");
};
app.use(ourMiddleWare);

app.use(express.json()); // parses the body

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
