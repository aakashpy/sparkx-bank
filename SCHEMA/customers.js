const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: String,
    email: String,
    amount:Number,
    gender:String,
    dob:String,
    phone:Number
});

const CustomerModel = mongoose.model("customers",CustomerSchema);
module.exports = CustomerModel;