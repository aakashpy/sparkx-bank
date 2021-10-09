
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import CustomerDetailsPage from '../pages/CustomerDetailsPage'

const CustomerDetails = props => {
    //const instance = axios.create({ baseURL: 'https://sparkx-bank.herokuapp.com/' });
    let history = useHistory();
    const allusers=[]
    var path1 = `/api/customers/getuser/${props.data}`
    var path2 = `/api/transfers/usertransaction/${props.data}`
    var path3 = `/api/transfers/receivedtransactions/${props.data}`
    var path4 = `/api/customers/`
    var nameToRemove = props.data

    var receivers = {}
    const storedUser = localStorage.getItem("username")
    if (storedUser) {
        path1 = `/api/customers/getuser/${storedUser}`
        path2 = `/api/transfers/usertransaction/${storedUser}`
        path3 = `/api/transfers/receivedtransactions/${storedUser}`
        nameToRemove = storedUser
        localStorage.setItem("username", storedUser)
    }
    else if (props.data) {
        localStorage.setItem("username", props.data)
    }
    else {
        history.push('/customers')
    }
    const [alluser,setalluser] = useState([])
    useEffect(()=>{
        axios.get(path4)
        .then(res=>{
            setalluser(
                res.data=res.data.filter((item)=>item.name!==nameToRemove)
            )
        }).catch(err=>{console.error(err);})
    },[])
    
    
    const [user, setuser] = useState([])
    useEffect(() => {
        axios.get(path1)
            .then(res => {
                setuser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const [transfers, settransfers] = useState([])
    useEffect(() => {
        axios.get(path2)
            .then(res => {
                settransfers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const [receivedTransactions, settransactions] = useState([])
    useEffect(() => {
        axios.get(path3)
            .then(res => {
                settransactions(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const [values, setValues] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(values => ({ ...values, [name]: value, }));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        debit();
    }
    function debit() {
        if(Number(values.amount)<user.amount){
            const debit_amount = user.amount - Number(values.amount);
            var debit_Amount = {
                amount: debit_amount
            }
            axios.put(`/api/customers/update/${user._id}`, debit_Amount)
                .then(res => res.data)
            receiver();
        }
        else{
            alert("No Sufficient funds available");
        }
    }
    function receiver() {
        axios.get(`/api/customers/getuser/${values.name}`)
            .then(res => {
                receivers = res.data
                if (receivers.error) {
                    alert("No user found");
                    history.push('/customers')
                    return 0
                }
                else {
                    return receivers.amount
                }
            })
            .then((data) => {
                if (data !== 0) {
                    credit(data)
                }
            })
    }
    function credit(data) {
        const credit_amount = data + Number(values.amount);
        var credit_Amount = {
            amount: credit_amount
        }
        axios.put(`/api/customers/update/${receivers._id}`, credit_Amount)
            .then(res => res.data)
        newtransfer();
    }
    
    function newtransfer() {
        var today = new Date();
        const date_locale = today.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
          });
        const time_locale = today.toLocaleTimeString('en-GB');
        
        const newtransfer = {
            sender_name: user.name,
            receiver_name: values.name,
            amount: values.amount,
            date: date_locale,
            time: time_locale,
        }
        axios.post('/api/transfers/add', newtransfer)
            .then(res => res.data)
        alert("Transaction Successfull");
        history.push('/customers')

    }

    if (!props) {
        return (
            <div>No content Passed</div>
        )
    }
    return (
        <div>
            {props.navbar}
            <div className="modal fade" id="exampleModal" tabIndex="-1" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Send Amount</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="receivername" className="form-label">Receiver Name:</label>
                                    <select className="form-select"name="name"id="amount"onChange={handleChange}>
                                        <option defaultvalue="Select User">Select User</option>
                                        {alluser.map((user)=>(
                                            <option value={user.name}>{user.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">Amount</label>
                                    <input type="number" className="form-control" id="amount" name="amount" value={values.amount} min="100" onChange={handleChange} placeholder="Minimum amount Rs/- 100"/>
                                </div>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <CustomerDetailsPage data={user} data2={transfers} data3={receivedTransactions} />
            {props.footer}
        </div>
    )
}

export default CustomerDetails
/*
<form onSubmit={onSubmit} >
                                <label>
                                    Receiver Name:
                                    <input type="text" name="name" value={values.name || ''} onChange={handleChange} />
                                </label><br/>
                                <label>
                                    Amount:
                                    <input type="number" name="amount" value={values.amount || 0} min="100" onChange={handleChange} />
                                </label><br />
                                <input type="submit" value="Submit" data-bs-dismiss="modal" />
                            </form> 
                            */