const { Router } = require("express");
const router = new Router();

const User = require("../models").user;
const TodoList = require("../models").todoList;

router.post("/lists/:userId", async (req, res, next) => {
  try {
    const { name } = req.body;
    const { userId } = req.params;

    const userExists = await User.findByPk(parseInt(userId));

    if (!userExists) {
      return res.status(404).send({ message: "User not found" });
    }

    if (!name) {
      return res.status(400).send({ message: "Please provide a name" });
    }
    const newList = await TodoList.create({
      name: name,
      ownerId: parseInt(userId),
    });

    console.log("new list created");
    res.status(200).send(newList);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
