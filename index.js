
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session')
const bodyParser = require('body-parser');
const User = require('./models/User'); 

const app = express();
const port = process.env.port || 4000;


// Connect to MongoDB
const dbURI = 'mongodb://127.0.0.1:27017/myDB'; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
  db.on("error",(err) =>   console.error('Error connecting to MongoDB'  ));
  db.once("open",() => {
    console.log('Connected to MongoDB successfully!');
    });



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret:'my secret key',
  saveUninitialized:true,
  resave: false,
}));

app.use((req,res,next)=>{
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});
//template engine
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
  res.send('hello, world')
})

// route
app.use("",require("./routes/routes"))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


