import React from 'react'

import Header from './Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAmount, addEmail, addName, addTerm } from '../userSlice';


const LoanApplicationForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
   const [Error, setError] = useState('')
   const [loanAmount, setloanAmount] = useState()
   const [term, setterm] = useState()
   const [Name, setName] = useState('')
   const [Email, setEmail] = useState('')
   dispatch(addName(Name))
   dispatch(addEmail(Email))
   dispatch(addTerm(term))
   dispatch(addAmount(loanAmount))
   
   

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (you can add more validation logic here)
    if (isNaN(Number(loanAmount)) || Number(loanAmount) <= 0) {
      alert("Please enter a valid loan amount.");
      return;
    }

    if (isNaN(Number(term)) || Number(term) <= 0) {
      alert("Please enter a valid loan term.");
      return;
    }

    

    
    
    navigate('/submitted')
    

    
    // Reset form fields after submission

  };
 

  return (
    <div>
      <Header/>
        <div className='text-center'>
        
         <h1 className='text-4xl font-serif font-bold'>XYZ Bank</h1>
         <h2 className='text-3xl font-serif font-semibold'>Loan Application Form</h2>
         </div>
         <div className='px-4 mt-[3%]'>
         
          <form className='text-center' onSubmit={handleSubmit}>
            <input className='border border-black rounded-md mb-5 py-7 text-center bg-gray-800 text-white w-64 h-11  ' type="text" placeholder='Enter the your full name' value={Name} onChange={(e)=>setName(e.target.value)}  /><br />
            <input className='border border-black rounded-md mb-5 py-7 text-center bg-gray-800 text-white w-64 h-11  ' type="text" placeholder='Enter your email' value={Email} onChange={(e)=>setEmail(e.target.value)}  /><br />
            <input className='border border-black rounded-md mb-5 py-7 text-center bg-gray-800 text-white w-64 h-11  ' type="number" placeholder='Enter the loan amount' value={loanAmount} onChange={(e)=>setloanAmount(e.target.value)}  /><br />
            <input className='border border-black rounded-md mb-5 py-7 text-center bg-gray-800 text-white w-64 h-11  ' type="number" min='0' max='10' placeholder='Enter loan term (in Weeks)' value={term} onChange={(e)=>setterm(e.target.value)}  /><br />
           
            
        
            <p className='text-red-500'>{Error}</p> 
            <button className='bg-green-600 p-3 rounded-lg hover:bg-green-500 ' type='submit'>Submit</button>
            
          </form>
         </div>

                    
    </div>
  )
}

export default LoanApplicationForm

