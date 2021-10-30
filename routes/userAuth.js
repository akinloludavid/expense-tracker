const express = require('express')
const router = express.Router()
const {signUp, signIn} = require('../controller/user')
router.post('/api/signup', signUp)
router.post('/api/signin', signIn)

module.exports= router