const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})