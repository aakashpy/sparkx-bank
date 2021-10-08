const Router = require("express").Router();
const CustomerModel = require("../SCHEMA/customers")

// Route - /
// Method - GET

Router.get("/",async (req,res)=>{
    const getAllCustomers = await CustomerModel.find();
    return res.json(getAllCustomers);
})

// Route - /add
// Method - POST
Router.post("/add",async (req,res)=>{
    const newCustomer = req.body;
    CustomerModel.create(newCustomer);
    return res.json({ message: "Customer added to the database" });
})

//Route - /getuser
//Method - GET
//params - name
Router.get("/getuser/:name",async(req,res)=>{
    const getuser = await CustomerModel.findOne({
        name: req.params.name,
    });
    if (!getuser) {
        return res.json({
            error: `No user found named ${req.params.name}`,
        });
    }
    return res.json(getuser);
})

//Route - /update
//Method - /PUT
//params - /id
Router.put("/update/:id", async (req, res) => {
    const amount = req.body.amount;
    const updateAmount = await CustomerModel.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        {
            amount: amount,
        },
        {
            new:true
        }
    );
    return res.json(updateAmount);
});



module.exports = Router;