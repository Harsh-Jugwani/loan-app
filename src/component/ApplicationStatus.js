import React from 'react'
import Header from "./Header";

import { useSelector } from 'react-redux';

const ApplicationStatus = () => {
  const {name,email,amount,term,update} = useSelector((store)=>store.user)

  return (
    <div className='text-center'>
      <Header/>
       <h1 className='text-4xl font-serif font-bold'>Application Status</h1>
       <div className=' text-2xl font-semibold mt-10'>
      <h1>Name:-{name}</h1>
      <h1>Email:-{email}</h1>
      <h1>Requested Amount:-{amount}</h1>
      <h1>Loan Term:-{term}</h1>
      <div>Status:-{update}</div>
      </div>

      </div>
  )
}

export default ApplicationStatus