const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
require('dotenv').config();

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
    const {userToken} = req.body
    res.sendFile('pages/signup.html', {root: __dirname})
})

// Create signup API
app.post('/signup', (req, res) => {
    const {userToken} = req.body
    res.sendFile('pages/signup.html', {root: __dirname})
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
