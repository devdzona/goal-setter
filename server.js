const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const goalRouter = require('./routes/goalRoutes.js')

const app = express()

app.use('/api/goals', goalRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})