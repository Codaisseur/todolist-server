const express = require("express");
const User = require("./models").user;
const PORT = 4001;
const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("testing! :)");
});

// Endpoint to get one user by id
app.get("/users/:id", async (req, res) => {
  try {
    // 1. get the Id from the params
    const userId = req.params.id;
    // 2. Go find the user in the DB => Model
    const theUser = await User.findByPk(userId);
    // 3. send him back
    res.send(theUser);
  } catch (e) {
    console.log(e.message);
  }
});

// users to be able to update their names;
app.patch("/users/:id", async (req, res) => {
  try {
    // get the id from the params
    const userId = req.params.id;
    // find the user in the DB
    const name = req.body.name;
    if (!name) {
      return res.status(400).send("you need to send a name");
    }
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send("user not found");
    }

    await user.update({ name: name });
    // update him
    res.send(user);
  } catch (e) {
    console.log(e.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    // 1. get the Id from the params
    const userId = req.params.id;
    // 2. Go find the user in the DB => Model
    const theUser = await User.findByPk(userId);
    // 3. send him back
    res.send(theUser);
  } catch (e) {
    console.log(e.message);
  }
});

app.post("/signup", async (req, res) => {
  try {
    // get request body => name, email, password
    const { name, email, password } = req.body;

    console.log("am i getting the params?", name, email);
    // Go to DB and create new user with params
    const newUser = await User.create({ name, email, password });
    // Send new user back
    res.send(newUser);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log("listening on port 4001"));
