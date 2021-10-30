const path = require("path");

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const port = process.env.PORT || 5000

app.listen(port, ()=>{
  console.log(`Server fired at http://localhost:${port}`)
})