require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')

const uri = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true,
    })
    .then(() => console.log("connection extablished!"))
    .catch((err) => {
        console.log(err);
    });

const app = express()
//API
const Customers = require("./API/customers")
const Transfers = require("./API/transfers")
app.use(cors());
app.use(express.json());
//Serve Static asset if we are in production
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
    app.use("/customers",Customers);
    app.use("/transfers",Transfers);
}
app.use(express.static("public"))


//MICROSERVICES
app.use("/customers",Customers);
app.use("/transfers",Transfers);
app.get("/", (request, response) => {
    response.json({ message: "Server is working!!!!!!" });
});



app.listen(PORT, () => console.log("Server is running"));