import React, { useRef, useState } from 'react';
import { checkValidData } from './validate';
import bg_img from '../utils/sl_121021_47240_08.jpg'
import { useNavigate } from 'react-router-dom';
import logo from '../utils/icons8-loan-96.png'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';


const Login = () => {
    const navigate = useNavigate()
    
    const[Toggle,setToggle] = useState(true);
    const [Error, setError] = useState(null)

    const handleClick = ()=>{
      setToggle(!Toggle);
    }
  
  
    const email = useRef();
    const name = useRef();
    const password = useRef();
    const handleCheckValidation = async()=>{
      const message = checkValidData(email.current.value,password.current.value);
      setError(message)
      if(message) return
    
      if(!Toggle){
     
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            if(user) setToggle(true)
            // ...
          })
          .catch((error) => {
            
            // ..
            setError("UserId already in use,Please registered using some other Id");
          });
      }
      else {signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if(user) 
          navigate('/')
  
        })
        .catch((error) => {
         
          setError('Invalid UserId or Password');
        });
    }
    }
    
  





  return (
    <div>
      <img src={bg_img} alt="" className='absolute ' />
        <div className='flex justify-between border-b-4 items-center '>
        <img className='h-16 md:h-20 ml-5 absolute mt-28 ' src={logo} alt='#'/>
        </div>
    <div>
        <form className='h-auto  md:w-3/12 w-9/12 bg-black m-36 mt-20 mx-auto right-0 left-0 bg-opacity-75 rounded-xl absolute' onSubmit={(e)=>e.preventDefault()}>
            <h3 className='p-5 text-red-800 font-bold text-2xl md:text-xl cursor-pointer'>{Toggle?"Sign In":"Sign out"}</h3>
            
            {!Toggle && <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="text" placeholder='Enter Name' ref={name} />}
            <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="email" placeholder='Enter Email'ref={email} />
            <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="password" placeholder='Password' ref={password} />
            <button type='submit' className='mx-6 my-3 p-2 bg-blue-700 rounded-lg' onClick={handleCheckValidation}>Submit</button>
            <p className='text-red-600 px-6'>{Error}</p>
            <p className='p-4 text-green-700' onClick={handleClick}>{Toggle?"Are you new,Let's Sign Up":"Already registered?Sign in Now."}</p>
        </form>
    </div>
    </div>
  )
}


export default Login