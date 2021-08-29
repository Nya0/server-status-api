const mongoose = require('mongoose')

const { Schema } = mongoose

const ServerHistorySchema = new Schema({
    ReportDate: { type: Date, required: true },
    StatusCode: { type: Number, required: true },
    ServerId: { type: Schema.Types.ObjectId, required: true },
    OnlineStatus: { type: Number, required: true }
}, { collection: 'statusHistory' })

const model = mongoose.model('statusHistory', ServerHistorySchema)

module.exports = model
