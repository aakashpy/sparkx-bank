const Router = require('express').Router();
const TransferModel = require("../SCHEMA/transfers");

// Route - /
// Method - GET

Router.get("/",async (req,res)=>{
    const getAllTransfers = await TransferModel.find();
    return res.json(getAllTransfers);
})

// Route - /add
// Method - POST
Router.post("/add",async (req,res)=>{
    const newTransfer =await req.body;
    TransferModel.create(newTransfer);
    return res.json({ message: "Tranfer Successful" });
})

//Route - /usertransaction
//Method - GET
Router.get("/usertransaction/:name",async (req,res)=>{
    const getuser = await TransferModel.find({
        sender_name: req.params.name,
    });
    if (getuser.length==0) {
        return res.json({
            error: `No user found named ${req.params.name}`,
        });
    }
    return res.json(getuser);
})
//Route -/receivedtransactions
//Method -/GET
Router.get("/receivedtransactions/:name",async (req, res)=>{
    const getTransactions = await TransferModel.find({
        receiver_name: req.params.name,
    })
    if (getTransactions.length==0) {
        return res.json({
            error: `No user transaction found for user ${req.params.name}`,
        });
    }
    return res.json(getTransactions);
    
})

module.exports = Router;