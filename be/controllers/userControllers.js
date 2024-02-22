
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
let jwtkey = process.env.JWT_KEY;
const bcrypt =  require("bcryptjs")

const CreateUser = async (req, res) => {
    try {
      // hashing password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
      let newUser = await new userModel(req.body);
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  };
  const loginUser = async (req, res) => {
    try {
      // check user email exist
      const user = await userModel.findOne({
        email: req.body.email,
      });

      console.log(user,"user")
      if (user) {
        const token = jwt.sign(
          {
            user: user._id,
          },
          jwtkey,

        );

        let verify_pass = await bcrypt.compare(req.body.password, user.password);
        !verify_pass && res.status(203).json("invalid credentials");

        res.status(200).json({
          user: user._id,
          token: token,
          role:user.role
        });
      } else {
        res.status(203).json("invalid credentials");
      }

      // verify password
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  module.exports = {loginUser,CreateUser}