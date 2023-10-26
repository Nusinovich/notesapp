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

// Crate About endpoint
app.get('/about', (req, res) => {
    res.sendFile('pages/about.html', {root: __dirname})
})

// Crate login endpoint
app.get('/login', (req, res) => {
    res.sendFile('pages/login.html', {root: __dirname})
})

// Crate signup endpoint
app.get('/signup', (req, res) => {
    res.sendFile('pages/signup.html', {root: __dirname})
})


// Create notes API
app.post('/getnotes', async(req, res) => {
    let notes = await Note.find({email: req.body.email})
    res.status(200).json({success: true, notes})
})

// Create login API
app.post('/login', async(req, res) => {
    let user = await User.findOne(req.body)
    if (!user){
        res.status(200).json({success: false, mesage:"No user found"})
    }
    else{
        res.status(200).json({success: true, user: {email: user.email}, mesage:"User found"})
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
app.post('/addnote', async(req, res) => {
    const {userToken} = req.body
    let note = await Note.create(req.body)
    res.status(200).json({success: true, note})
})

// Create delete note API
// app.post('/deletenote', async(req, res) => {
//     const {userToken} = req.body
//     let id = await userToken.deleteOne(req.body)
//     res.status(200).json({success: true, id})
// })
  

// .env connection
const port = process.env.port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

// // //mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log('Mongodb is Ready!')
})  