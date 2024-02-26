import React from 'react'
import logo from '../utils/icons8-loan-96.png'
import { Link, useNavigate } from 'react-router-dom';
import BackGroundImg from '../utils/sl_121021_47240_08.jpg'
const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate('/login')
  };
  const handleAlert =()=>{
    if (window.confirm("Are you sure you want to sign-out!")) {
      var txt = "You pressed OK!";
      handleSignOut();
    } else {
      var txt = "You pressed Cancel!";
    }

  }
  return (
    <div>
      
    <div className='flex justify-between border-b-4 items-center'>
        <img className='h-16 md:h-20 ml-5'src={logo} alt='#'/>
        <div className='flex list-none font-bold text-xs'>
        <Link to= '/' className='mx-3 text-[13px] md:text-[20px] md:mx-4 '>Home</Link>
        <Link to='/loanpay' className=' mx-3 text-[13px] md:text-[20px] md:mx-4 '>Pay Repayment</Link>
        <Link className='mx-3 text-[13px] md:text-[20px] md:mx-4 ' to='/submitted'>Loan Details</Link>
        <Link className='mx-3 text-[13px] md:text-[20px] md:mx-4 ' to='/admin'>Admin</Link>
        <button onClick={()=>{handleAlert()}} className="  px-2 text-[13px] mx-4 shadow-sm bg-red-700 text-white rounded-lg   py-2  cursor-pointer">
            Sign Out</button>
        
        </div>
    </div>
    </div>
   
  )
}

export default Header