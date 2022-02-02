const { Router } = require('express');
const router = new Router();

const randomAuthMiddleware = require('../middlewares/middleware.js');

const User = require('../models').user;
const TodoList = require('../models').todoList;
// /users from index + /users from user.js

router.get('/', randomAuthMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Endpoint to get one user by id
router.get('/:id', async (req, res) => {
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
router.patch('/:id', async (req, res) => {
  try {
    // get the id from the params
    const userId = req.params.id;
    // find the user in the DB
    const name = req.body.name;
    if (!name) {
      return res.status(400).send('you need to send a name');
    }
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send('user not found');
    }

    await user.update({ name: name });
    // update him
    res.send(user);
  } catch (e) {
    console.log(e.message);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    // 1. get the Id from the params
    const userId = req.params.id;
    // 2. Go find the user in the DB => Model
    const theUser = await User.findByPk(userId);
    // 3. send him back
    res.send(theUser);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.post('/signup', async (req, res) => {
  try {
    // get request body => name, email, password
    console.log('The request body', req.body);
    const { name, email, password } = req.body;

    console.log('am i getting the params?', name, email);
    // Go to DB and create new user with params
    const newUser = await User.create({ name, email, password });
    // Send new user back
    res.send(newUser);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
