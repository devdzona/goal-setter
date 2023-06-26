const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const goalRouter = require('./routes/goalRoutes.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded( {extended: true}))
app.use('/api/goals', goalRouter)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})