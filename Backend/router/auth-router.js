const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth-controller")

router.route("/").get(authController.Login)
router.route("/register").post(authController.Register)

module.exports = router;