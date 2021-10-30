const UserModel = require('../models/usersModel')
const bcrypt = require('bcryptjs')
require('dotenv').config()

exports.signUp = async (req, res, next) =>{
  try{
    const check = await UserModel.findOne({ email: req.body.email });
    if (check) return res.status(400).json({ message: "User already registered", success:false });

    let newUser = new UserModel({
      firstname: req.body.firstname,
      lastname:req.body.lastname,
      email: req.body.email,
      password: req.body.password,
  });
  
  const salt = await bcrypt.genSalt(10)
  newUser.password = await bcrypt.hash(newUser.password, salt)
  newUser = await newUser.save();
  res.status(201).json({
    success:true,
    message:"User successfully created",
    data:newUser
  })
 } catch (error) {
  res.status(500).json({message:error.message, success:false})
 }
}

exports.signIn = async (req, res, next) => {
  try {
    let user = await UserModel.findOne({
      email: req.body.email
    });
    if (!user) return res.status(400).json({
      message: "Invalid email or password"
    });

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).json({
      message: "Invalid email or password"
    });

    const token = user.generateToken()
    res.status(200).json({token, user, success:true});
  } catch (error) {
    return res.status(500).json({message:error.message, success:false})
  }
  next()
}
