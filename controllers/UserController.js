const User = require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



module.exports = {
    register: async (req, res) => {

        try{
            const { email, password, passwordCheck, displayName } = req.body;

            if (!email || !password || !passwordCheck || !displayName) {
              return res
                .status(400)
                .json({ msg: "Not all fields were entered" });
            }

            if (passwordCheck.length < 8) {
              return res
                .status(400)
                .json({ msg: "you need a longer password" });
            }

            if (password !== passwordCheck) {
              return res
                .status(400)
                .json({ msg: "Password does not match the password check" });
            }

            const existingUser = await User.findOne({ email: email });

            if (existingUser) {
              return res.status(400).json({ msg: "User already Exists" });
            }

            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);

            const newUser = new User({
              email,
              password: passwordHash,
              displayName,
            });

            const savedUser = await newUser.save();
            res.json(savedUser);
        }catch(err){
            res.status(500).json({ msg: err });
        }
        
    },
};