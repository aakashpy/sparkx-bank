const mongoose = require('mongoose');

const TransferSchema = mongoose.Schema({
    sender_name:String,
    receiver_name:String,
    amount:Number,
    date:String,
})

const TransferModel = mongoose.model("transfers",TransferSchema);
module.exports = TransferModel;