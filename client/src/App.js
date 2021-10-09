import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllCustomersPage from './pages/AllCustomerPage'
import Transfers from './components/Transfers'
import CustomerDetails from './components/CustomerDetails'
import About from './pages/About'
import Navbar from './FixComponents/Navbar'

function App() {
  const [user,setuser]=useState('');
  const changeuser=(user)=>setuser(user)
  const links=[
    {
        linkpath:"/customers",
        linkname:"Customers"
    },
    {
        linkpath:"/transfers",
        linkname:"Transactions"
    },{
        linkpath:"/about",
        linkname:"About"
    }
]
  
  return (
    <Router>
      <Switch>
        <Route path="/"exact 
        render={()=><HomePage navbar = {<Navbar links={links}/>} />}/>
        <Route path="/customers"exact 
        render={()=><AllCustomersPage data = {changeuser} navbar = {<Navbar links={links}/>} />}/>
        <Route path="/customers/details"exact 
        render={()=><CustomerDetails data = {user} navbar = {<Navbar links={links}/>} />}/>
        <Route path="/transfers" exact 
        render={()=><Transfers navbar = {<Navbar links={links}/>} />}/>
        <Route path="/about" exact 
        render={()=><About navbar = {<Navbar links={links}/>} />}/>
      </Switch>
    </Router>
  );
}

export default App;