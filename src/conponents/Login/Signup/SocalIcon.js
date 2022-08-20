import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import './SocalIcon.css';

const SocalIcon = () => {
    const navigate = useNavigate()
const location = useLocation();
let from = location.state?.from?.pathname || "/";
 


const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(error);
  
      if (loading) {
        return( <Loading></Loading>)
       
      }
      if(user) {
        navigate(from, { replace: true });
      }
     



    return (
        <div className='text-center m-auto'>
           
            {/* <button onClick={() => signInWithGoogle()} className='text-center icon-btn'><FcGoogle></FcGoogle> Google Sign in</button> */}
            <Button onClick={() => signInWithGoogle()} variant="secondary"><FcGoogle></FcGoogle> Google Sign in</Button>
        </div>
    );
};

export default SocalIcon;