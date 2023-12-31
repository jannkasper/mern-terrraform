const mongoose = require('mongoose')

const mongodbUsername = process.env.MONGODB_USERNAME
const mongodbPassword = process.env.MONGODB_PASSWORD
const mongodbUrl = process.env.MONGODB_URL
mongoose
    .connect(mongodbUrl, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
