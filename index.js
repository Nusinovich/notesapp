const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
require('dotenv').config();

// Crate Home route
app.get('/', (req, res) => {
    res.sendFile('pages/index.html', {root: __dirname})
})

// Crate login route
app.get('/login', (req, res) => {
    res.sendFile('pages/login.html', {root: __dirname})
})

// Crate signup route
app.get('/signup', (req, res) => {
    res.sendFile('pages/signup.html', {root: __dirname})
})

// Create POST route to get the notes
app.post('/getnotes', (req, res) => {
    const {userToken} = req.body
    res.sendFile('pages/signup.html', {root: __dirname})
})





const port = process.env.port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
