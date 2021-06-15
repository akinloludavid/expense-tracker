const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSchema = new mongoose.Schema({
  firstname:{
    type:String, 
    required:true
  },
  lastname:{
    type:String, 
    required:true
  }, 
  email:{
    type:String, 
    required:true
  }, 
  password:{
    type:String,
    required:true
  }
})
userSchema.methods.generateToken = function () {
  const token = jwt.sign({
    id: this._id,
    email:this.email
  }, process.env.TOKEN_KEY, {
    expiresIn: '5d'
  });
  return token
}
const UserModel = mongoose.model('Users', userSchema)
module.exports = UserModel;