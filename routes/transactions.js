const express = require('express')
const router = express.Router()
const {getTransactions, addTransactions, deleteTransactions} = require('../controller/transact')
const {authenticate} = require('../middleware/auth')
router
  .route('/')
  .get(authenticate, getTransactions)
  .post(authenticate, addTransactions)

router.route('/:id')
  .delete(authenticate, deleteTransactions)
module.exports = router;