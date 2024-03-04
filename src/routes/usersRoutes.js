const router = require("express").Router();
const usersControllers = require("../controllers/usersControllers");

router.get("/users", usersControllers.getUsers);

module.exports = router;


