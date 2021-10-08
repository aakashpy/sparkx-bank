import React from 'react'
import HomePage from '../pages/HomePage'


const Home = () => {
    localStorage.clear();
    const links=[
        {
            linkpath:"/customers",
            linkname:"Customers"
        },
        {
            linkpath:"/transfers",
            linkname:"Transactions"
        }
    ]
    return (
        <>
        <HomePage data={links}/>
        </>
    )
}

export default Home
