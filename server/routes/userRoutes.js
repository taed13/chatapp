const {
  register,
  login,
  set_avatar,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", set_avatar);

module.exports = router;
