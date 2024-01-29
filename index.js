const express = require('express')

const bodyparser = require('body-parser')

const { dbConnection } = require('./config/db.config')

const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyparser.json())

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

app.listen(port, async () => {
  console.log('server listening on port ' + port)
  await dbConnection()
})
