const mongoose = require('mongoose')

const { Schema } = mongoose

const ServerInfoSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Host: { type: String, required: true }
}, { collection: 'servers' })

const model = mongoose.model('servers', ServerInfoSchema)

module.exports = model