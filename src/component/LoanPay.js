import React from 'react'

const LoanPay = () => {
    const handleSubmit_PayLoan = async(e) =>{
        
            e.preventDefault()
    }
    const handleAlert = () => {
        if (window.confirm("Are you sure you want to make a payment!")) {
            var txt = "You pressed Yes!";
            
          } else {
            var txt = "You pressed No!";
          }
    }
  return (

    <div className='text-center'>
        <h1 className='text-3xl font-serif font-semibold mb-5'>Pay your Loan EMI</h1>
        <form onSubmit={handleSubmit_PayLoan}>
            <input type="number" placeholder='Enter the amount' className='border border-black rounded-md mb-2 py-2 text-center bg-gray-800 text-white w-64 h-11' min={''}/><br/>
            <button className='bg-blue-700 text-white px-4 py-2 rounded-lg m-2' onClick={handleAlert}>Proceed</button>
        </form>
    </div>
  )
}

export default LoanPay