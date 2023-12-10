const express = require("express");
const usersRouter = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserById,
} = require("../db");

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

usersRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);

    res.send({ user });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { firstname, lastname, email, password, status } = req.body;

  try {
    const updatedUser = await updateUser(
      id,
      firstname,
      lastname,
      email,
      password,
      status
    );

    res.send({ user: updatedUser });
  } catch ({ name, message }) {
    console.error({ name, message });
    next({ name, message });
  }
});

usersRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await deleteUserById(id);

    if (!user) {
      next({
        name: "NotFound",
        message: `Cannot find user with ID ${user_id} to delete.`,
      });
    } else {
      res.send({ success: true, user });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});
module.exports = usersRouter;
