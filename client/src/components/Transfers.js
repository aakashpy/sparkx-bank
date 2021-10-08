import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TransferPage from '../pages/TransferPage'

const Transfers = (props) => {
    const [transfers, settransfers] = useState([])
    //const instance = axios.create({ baseURL: 'http://localhost:5000/' });
    useEffect(() => {
        axios.get("/transfers")
            .then(res => {
                settransfers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {props.navbar}
            <TransferPage data={transfers}/>
            {props.footer}
        </div>
    )
}

export default Transfers
