import React from 'react'
import './TransferPage.css'

const TransferPage = (props) => {
    const transfers = props.data;
    return (
        <div>
            <h2 id="header" >All Transactions</h2>
            <div className="container">
                <div className="row">
                    {transfers.map((transfer) => (
                        <div className="col-md-6 col-sm-12 col-lg-4" key={transfer._id}>
                            <div className="card " >
                                <div className="container mt-2">
                                     <div className="row"style={{margin:"0px"}}>
                                        <div className="col-sm-8 col-md-7"id="info1">
                                            <h6>To-</h6>
                                        </div>
                                        <div className="col-sm-4 col-md-5"id="info2">
                                            <p>{transfer.receiver_name}</p>
                                        </div>
                                    </div>
                                    <div className="row"style={{margin:"0px"}}>
                                        <div className="col-sm-8 col-md-7"id="info1">
                                            <h6>From-</h6>
                                        </div>
                                        <div className="col-sm-4 col-md-5"id="info2">
                                            <p>{transfer.sender_name}</p>
                                        </div>
                                    </div>
                                    <div className="row"style={{margin:"0px"}}>
                                        <div className="col-sm-8 col-md-7"id="info1">
                                            <h6>Amount Transfered</h6>
                                        </div>
                                        <div className="col-sm-4 col-md-5"id="info2">
                                            <p>Rs/- {transfer.amount}</p>
                                        </div>
                                    </div>
                                    <div className="row"style={{margin:"0px"}}>
                                        <div className="col-sm-8 col-md-7"id="info1">
                                            <h6>Date/Time</h6>
                                        </div>
                                        <div className="col-sm-4 col-md-5"id="info2">
                                            <p>{transfer.date.slice(0,25)}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TransferPage