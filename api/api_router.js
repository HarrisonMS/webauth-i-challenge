const router = require("express").Router();

const authRouter = require("../auth/auth_router.js");
const usersRouter = require("../users/users_router.js");

router.use("./auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
    res.json({api: "You figured it out!"});
});

module.exports = router;