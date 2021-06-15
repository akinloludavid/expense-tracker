const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv');
const transactions = require('./routes/transactions');
const users = require('./routes/userAuth')
const connectDB = require('./config/connection');
dotenv.config({
  path:'./config/config.env'
})

connectDB()
const app = express()
app.use(express.json())
app.use(logger('dev'))

app.use('/', users)
app.use('/api/expense-tracker', transactions)


const port = process.env.PORT || 4000

app.listen(port, ()=>{
  console.log(`Server fired at http://localhost:${port}`)
})