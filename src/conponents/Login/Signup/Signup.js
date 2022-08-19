import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../Login/Login.css';
import auth from '../../firebase.init';
import SocalIcon from './SocalIcon';
import Loading from '../../Loading/Loading';
import { Button, Form,} from 'react-bootstrap';



const Signup = () => {
  
  
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const [confirmpass,setConfirmpass]=useState('');

let HendelError;
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});

const navigate = useNavigate()
const location = useLocation();
let from = location.state?.from?.pathname || "/";

  if (error) {
    HendelError = <div>
        <p>Error:{error.message}</p>
      </div>
    
  }
  if (loading ) {
    return( <Loading></Loading>)
   
  }
  if(user) {
    navigate(from, { replace: true });
  }
 
  


const Handelemail = event => {
  const email = event.target.value;
  setEmail(email);
}
const HendelPassword = event => {
    const password = event.target.value;
    setPassword(password);
}
const HandelConfirmPassword = event => {
    const ConfiramPassword = event.target.value;
    setConfirmpass(ConfiramPassword);
}
const HandleSubmit =event => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password)
    console.log(email,password);
}



    return (
      <div className='m-auto mt-5 p-2 from-secton mb-4' style={{ width: '20rem' }}>
            <h5 className='text-center'>Create a New account</h5>
        <p className='text-center'>Please provide the following details.</p>
        <div>
            <form onSubmit={HandleSubmit} action="">

   
        <Form.Label>Email address</Form.Label>

        <Form.Control onBlur={Handelemail} type="text" placeholder="Email" />
        <label for="lname">New Password </label> <br/>
       {/* <input onBlur={HendelPassword} className='ps-2 pt-1 pb-1' type="Password"  id='Password' /> <br/> */}
       <Form.Control onBlur={HendelPassword} type="Password" placeholder='New Password' />
        <label for="lname">Confirm New Password </label> <br/>
       {/* <input onBlur={HandelConfirmPassword} className='ps-2 pt-1 pb-1' type="Password" placeholder='Confirm New Password' id='Password' /> <br/> */}
       <Form.Control onBlur={HandelConfirmPassword} type="Password" placeholder='Confirm New Password' />
       <Button onClick={HandleSubmit} variant="primary">Register</Button>
        
           <p className='text-center mt-2'>OR</p>
       <SocalIcon></SocalIcon>
       <p className='text-danger'>   {HendelError}</p>
       <p>Already have an account? <Link to="/Login">Login</Link> </p>
       </form>
             
        </div>
        
    </div>
    );
};

export default Signup;