const jwt = require('jsonwebtoken');
const UserModel = require('../models/usersModel');
require('dotenv').config()

exports.authenticate = async (req, res, next) =>{
  try {
    if(!req.headers.authorization){
      return res.status(400).json({message:"Unauthorized"})
    }
    const token = req?.headers?.authorization.split(" ")[1];
    if(!token){
      return res.status(403).json({
        message:"Token not provided"
      })
    }
    const decoded = await jwt.verify(token, process.env.TOKEN_KEY)
    const user = await UserModel.findById({_id: decoded.id});
    if (!user) {
      return res.status(400).json('no token provided');
    } else {
      req.user = user;
    }
    next()
  } catch (error) {
     res.status(400).json({
      'error': error.message
    });
    process.exit(1)
  }

}

