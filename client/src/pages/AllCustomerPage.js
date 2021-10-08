import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AllCustomerPage.css'

const AllCustomersPage = (props) => {
    localStorage.clear();
    const [customers, setcustomers] = useState([])
    useEffect(() => {
        //const instance = axios.create({ baseURL: 'http://localhost:5000/' });
    const instance = axios.create({ baseURL: 'https://sparkx-bank.herokuapp.com/' });
        instance.get("/customers")
            .then(res => {
                setcustomers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    if (!customers) {
        return (
            <div>No content Passed</div>
        )
    }
    return (
        <div>
            {props.navbar}
            <div className="flex-container container-fluid">
                {customers.map((customer) => (
                    <div className="card" key={customer._id}>
                        <div className="card-body">
                            <Link className="card-title" to="/customers/details" onClick={() => props.data(customer.name)}><h5>{customer.name}</h5><p>Click here for more info</p><br /></Link>
                            <table class="table table-dark table-striped table-hover table-responsive-sm" >
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{customer.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-Mail</th>
                                        <td>{customer.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone Number</th>
                                        <td>{customer.phone}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Balance</th>
                                        <td>{customer.amount}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Gender</th>
                                        <td>{customer.gender}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Date of Birth</th>
                                        <td>{customer.dob}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
            {props.footer}
        </div>
    )
}

export default AllCustomersPage
/*
<p>All customer entries are</p>
            
                <div key={customer._id}>
                <Link  to="/customers/details" onClick={() => props.data(customer.name)}>{customer.name}<br/><br/></Link>
                </div>
            
*/
