const { register, login } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.get("/login", login);

module.exports = router;
