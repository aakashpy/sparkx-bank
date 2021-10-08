import React from 'react'

const CustomerDetailsPage = (props) => {
    const transfers = props.data2
    const received_transactions = props.data3
    var sent_transaction_script = ''
    var received_transaction_script = ''
    if ('error' in props.data2 || props.data2.lenght === 0) {
        sent_transaction_script = <h3 className="text-center" style={{ color: "black" }}>No transaction done from the user</h3>
    }
    else {

        sent_transaction_script = transfers.map((transfer) => (
            <tr key={transfer._id}>
                <td>{transfer.date}</td>
                <td>{transfer.receiver_name}</td>
                <td>{transfer.amount} Rs/-</td>
            </tr>
        ))

    }
    if ('error' in props.data3 || props.data3.lenght === 0) {
        received_transaction_script = <h3 className="text-center" style={{ color: "black" }}>No transaction received</h3>
    }
    else {
        received_transaction_script = received_transactions.map((transaction) => (
            <tr key={transaction._id}>
                <td>{transaction.date}</td>
                <td>{transaction.sender_name}</td>
                <td>{transaction.amount} Rs/-</td>
            </tr>
        ))
    }
    if ('error' in props.data2 || props.data2.lenght === 0) {
        sent_transaction_script = <h3 className="text-center" style={{ color: "black" }}>No transaction done from the user</h3>
    }
    else {
        sent_transaction_script = transfers.map((transfer) => (
            <tr key={transfer._id}>
                <td>{transfer.date}</td>
                <td>{transfer.receiver_name}</td>
                <td>{transfer.amount} Rs/-</td>
            </tr>
        ))
    }
    if ('error' in props.data3 || props.data3.lenght === 0) {
        received_transaction_script = <h3 className="text-center" style={{ color: "black" }}>No transaction received</h3>
    }
    else {
        received_transaction_script = received_transactions.map((transaction) => (
            <tr key={transaction._id}>
                <td>{transaction.date}</td>
                <td>{transaction.sender_name}</td>
                <td>{transaction.amount} Rs/-</td>
            </tr>
        ))
    }
    return (
        <><div className="container">
            <div className="card">
                <div className="card-body table-responsive">
                    <table className="table table-striped ">
                        <tbody>
                            <tr>
                                <td><h3>Name</h3></td>
                                <td><h4 className="text-center">{props.data.name}</h4></td>
                            </tr>
                            <tr>
                                <td><h3>Email </h3></td>
                                <td><h4 className="text-center">{props.data.email}</h4></td>
                            </tr>
                            <tr>
                                <td> <h3>Total Balance </h3></td>
                                <td><h4 className="text-center">{props.data.amount}</h4></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb-2">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Make Transaction
                    </button>
                </div>
            </div>
        </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 table-responsive">
                        <h2 className="text-center">Your Transcations</h2>
                        <table className="table table-dark table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Date/Time</th>
                                    <th scope="col">Receivers Name</th>
                                    <th scope="col">Amount transfered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sent_transaction_script}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12 col-md-6 table-responsive">
                        <h2 className="text-center">Received Transactions</h2>
                        <table className="table table-dark table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Date/Time</th>
                                    <th scope="col">Sender's Name</th>
                                    <th scope="col">Amount received</th>
                                </tr>
                            </thead>
                            <tbody>
                                {received_transaction_script}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerDetailsPage
