const express = require('express')
const app = express()
const port = 3000

// Crate Home route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Crate login route
app.get('/login', (req, res) => {
    res.send('login')
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})