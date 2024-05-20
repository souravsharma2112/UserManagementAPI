const User = require("../models/user-model")
const bcrypt = require("bcryptjs")



const Login = async (req, res) => {
    try {
        res.status(200);
        res.send("SAdsad");

    } catch (error) {
        console.log(error);
    }
}


const Register = async (req, res) => {
    try {
        console.log(req.body);
        const { fname, lname, username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email })

        if (userExist) {
            return res.status(400).json({ msg: "email Exist" })
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound)

        const userCreated = await User.create({ fname, lname, username, email, phone, password })

        res.status(200);
        res.json(userCreated)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { Login,Register}