require('dotenv').config()
const express = require('express')
const path = require('path')
// const cors = require('cors')

const app = express()

// app.use(express.json({limit: '100mb'}));
// app.use(express.urlencoded({extended: true}))
// app.use(cors())

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
