const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth-controller")
const signupSchema = require("../validators/auth-validators")

const validate = require("../middleware/validater-middleware")

router.route("/").get(authController.Home)
router.route("/register").post(validate(signupSchema) ,authController.Register)
router.route("/login").post(authController.Login)

module.exports = router;