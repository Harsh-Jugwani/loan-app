import React from 'react'
import Cookies from "js-cookie";
import Header from './Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const token = Cookies.get("user_token");

const LoanApplicationForm = () => {
  const navigate = useNavigate();
   const [Error, setError] = useState('')
   const [loanAmount, setloanAmount] = useState('')
   const [term, setterm] = useState('')
  
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

    

    // Create a request body object
    const requestBody = {
      loanAmount: Number(loanAmount), // Convert to a number
      term: Number(term), // Convert to a number
    };
    try {
      // Send the request to the server (e.g., via an API call)
      const response = await fetch(
        "/api/loans/createLoan/" + Cookies.get("userId"),
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Handle successful response (e.g., show a success message)
        alert(`Loan application successful.`);
        // Reset form fields after submission
        navigate('/submitted')
        setloanAmount("");
        setterm("");
      } else {
        setError("Loan application failed. Please try again.");
        alert("Loan application failed. Please try again.");
      }
    } catch (error) {
      console.error("Loan application error:", error);
      setError("Loan Application Failed! Please try again later");
      // Handle error (e.g., display an error message)
      alert("Loan application failed. Please try again later.");
    }
    // Reset form fields after submission
    setloanAmount("");
    setterm("");
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