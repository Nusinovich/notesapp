const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const Note = require('./models/Notes')
const app = express()
const cors = require('cors');
require('dotenv').config();

//middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

// Enable CORS for all origins
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });


// Crate Home endpoint
app.get('/', (req, res) => {
    res.sendFile('pages/index.html', {root: __dirname})
})

// Crate login endpoint
app.get('/login', (req, res) => {
    res.sendFile('pages/login.html', {root: __dirname})
})

// Crate signup endpoint
app.get('/signup', (req, res) => {
    res.sendFile('pages/signup.html', {root: __dirname})
})

// Create get notes API
app.post('/getnotes', (req, res) => {
    const {userToken} = req.body
    res.sendFile('pages/signup.html', {root: __dirname})
})

// Create login API
app.post('/login', (req, res) => {
    let user = user.find(req.body)
    if (!user){
        res.send(200).json({success: false, mesage:"No user found"})
    }
    else{
        res.send(200).json({success: true, user, mesage:"User found"})
    }
})

// Create signup API
app.post('/signup', async(req, res) => {
    const {userToken} = req.body
    console.log(req.body)
    let user = await User.create(req.body)
    res.status(200).json({success: true, user: user})
})

// Create add note API
app.post('/addnote', (req, res) => {
    const {userToken} = req.body
    res.sendFile('pages/signup.html', {root: __dirname})
})

// Create delete note API
app.post('/deletenote', (req, res) => {
    const {userToken} = req.body
    res.sendFile('pages/signup.html', {root: __dirname})
})

// .env connection
const port = process.env.port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

// // //mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log('Mongodb is Ready!')
})  