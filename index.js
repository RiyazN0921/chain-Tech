const express = require('express')

const bodyparser = require('body-parser')

const app = express()

require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res, next) => {
  try {
    res.status(200).json({
      message: 'Hello, Welcome to chainTech Network!',
    })
  } catch (error) {
    next(error)
  }
})

app.listen(port, () => {
  console.log('server listening on port ' + port)
})
