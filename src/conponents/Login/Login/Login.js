import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Button, Card, Form } from 'react-bootstrap';

const Login = () => {

    const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const navigate = useNavigate()
const location = useLocation();
let from = location.state?.from?.pathname || "/";

let HendelError;
const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
  auth
);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (error ||error1) {
        HendelError = <div>
            <p className='text-danger'>Error:{error?.message} {error1?.message}</p>
          </div>
        
      }
      if (loading || sending) {
        return( <Loading></Loading>)
       
      }
      if(user)
       {
        return (navigate(from, { replace: true }));
      }
     


      const Handelemail = event => {
        const email = event.target.value;
        setEmail(email);
      }
      const HendelPassword = event => {
          const password = event.target.value;
          setPassword(password);
      }
      
      const HandelLoginSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
      }

      

    return (
        <Card className='m-auto mt-5 p-2 from-secton ' style={{ width: '20rem' }}>
            <p className='text-center'>Sign in with your existing account</p>
            <div>
                <form onSubmit={HandelLoginSubmit} action="">
           
            <Form.Label>Email address</Form.Label>
           

            <Form.Control onBlur={Handelemail} type="text" placeholder="Email" />
             <br/>
            <label for="lname">Password   <span className='forgot-password ps-1 mt-2 mb-2 m-0 p-0'>
              
              <Form.Label  onClick={async () => {
          if(email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
          }else{
            await sendPasswordResetEmail(email);
            toast('Please enter your email address');
          }
           }} className='text-primary forgot-password'> Forgot your password?</Form.Label>
           
           </span></label> <br/>

           <Form.Control onBlur={HendelPassword} type="Password" placeholder="Password" />
            <br/>

           <Button onClick={HandelLoginSubmit} variant="primary">Primary</Button>
           <ToastContainer />
           <p className='text-center mt-2'>OR</p>
           <p text-dengar>{HendelError}</p>
           <p>Don't have an account? <Link to="/Signup"> Create Account</Link></p>
           </form>
                 
            </div>
            
        </Card>
    );
};

export default Login;