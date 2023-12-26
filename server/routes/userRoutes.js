const {
  register,
  login,
  set_avatar,
  getAllUsers,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", set_avatar);
router.get("/allusers/:id", getAllUsers);

module.exports = router;
