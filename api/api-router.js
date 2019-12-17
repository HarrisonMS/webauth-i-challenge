const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../routes/users-router.js");

router.use("./auth", authRouter);
router.use("/users", usersRouter);

function logger(req, res, next) {
	console.log(`${req.method} to ${req.originalUrl} at ${new Date()}`);
	next();
}

router.usee(logger);
router.use("./auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
    res.json({api: "You figured it out!"});
});

module.exports = router;