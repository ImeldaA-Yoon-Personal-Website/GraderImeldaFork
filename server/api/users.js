const express = require("express");
const usersRouter = express.Router();
const { createUser, getAllUsers } = require("../db");

usersRouter.post("/", async (req, res, next) => {
  const { firstname, lastname, email, password, status } = req.body;
  const userData = {};
  try {
    userData.firstname = firstname;
    userData.lastname = lastname;
    userData.email = email;
    userData.password = password;
    userData.status = status;

    console.log("Trying to createUser ${userData}");

    const user = await createUser(userData);

    if (user) {
      res.send(user);
    } else {
      next({
        name: "userCreationError",
        message:
          "There was an error creating your user. Please try again. Possibly user's email is not unique or pre-existing.",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/", async (req, res, next) => {
  try {
    const allUsers = await getAllUsers();

    res.send({ allUsers });
  } catch ({ name, message }) {
    next({ name, message });
  }
});
module.exports = usersRouter;
