const User = require("./models").user;
const TodoList = require("./models").todoList;

// Console.log all users in the database.
// .findAll
// .findOne
// .findByPk => primary key => id

const getUserandList = async (id) => {
  try {
    const oneUser = await User.findByPk(id, {
      include: [TodoList],
    });
    console.log(oneUser.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};
getUserandList(1);

// get one specific user by id
const userById = async (id) => {
  try {
    const oneUser = await User.findByPk(id);
    console.log(oneUser);
  } catch (e) {
    console.log(e.message);
  }
};

// get one specific user by email
const userByEmail = async (searchEmail) => {
  try {
    //
    const oneUser = await User.findOne({
      where: { email: searchEmail },
      raw: true,
      attributes: ["name", "email"],
    });
    if (!oneUser) {
      console.log("user does not exist");
    } else {
      console.log("query result", oneUser);
    }
    //
  } catch (e) {
    console.log(e.message);
  }
};

// userByEmail("leo@messi.com");
