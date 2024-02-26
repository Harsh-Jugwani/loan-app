import React from 'react'
import logo from '../utils/icons8-loan-96.png'
const Header = () => {
  return (
    <div className='flex'>
        <img src={logo} alt="" className='mx-6' />
        <span className='mt-5 text-2xl font-bold font-serif'>Loan Pay</span>
    </div>
  )
}

export default Header