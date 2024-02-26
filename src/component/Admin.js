import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import { setUpdate } from '../userSlice';

const Admin = () => {
    const dispatch = useDispatch();
    const [Toggle, setToggle] = useState(true)
    const {name,email,amount,term,update} = useSelector((store)=>store.user)
    const handleStatus = () =>{

        dispatch(setUpdate("Approved"))
        setToggle(false)
        
    }
    const handleDenied = () =>{

        dispatch(setUpdate("Rejected"))
        setToggle(false)
        
    }

  return (
    <div>
        <Header/>
    <div className='text-center'>
       
       <h1 className='text-4xl font-serif font-bold'>Admin Panel</h1>
       <div className='text-2xl font-semibold mt-10 '>
      <h1>Name:-{name}</h1>
      <h1>Email:-{email}</h1>
      <h1>Requested Amount:-{amount}</h1>
      <h1>Loan Term:-{term}</h1>
      {Toggle&&<button className='bg-green-500 text-white py-1 px-2 rounded-lg m-2' onClick={handleStatus}>Approve</button>}
      {Toggle&&<button className='bg-red-500 text-white py-1 px-2 rounded-lg' onClick={handleDenied}>Reject</button>}
      </div>
      </div>
      </div>

 
  )
}

export default Admin