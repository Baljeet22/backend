require('dotenv').config()//Getting .env variables
////Declaring some Dependencies///
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const mongoose = require("mongoose")
////END-Declaring some Dependencies///

///creating database connection///
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))
/////End Creating database connection////

app.use(express.json()) //Let server use json data from different methods

///Creating Routes///
////Routes for login function///
const loginRouter = require('./routes/login')
app.use('/login', loginRouter) //pointing router address to the path
////Routes for adding user function///
const addUserRouter = require('./routes/adduser')
app.use('/adduser', addUserRouter)
///End Creating Routes///

///Initialising Server at desired port///
app.listen(4000, function () {
    console.log("server is running on port 4000")
})
