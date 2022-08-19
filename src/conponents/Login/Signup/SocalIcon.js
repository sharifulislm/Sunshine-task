import React from 'react';
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
    let HendelError;


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error ) {
        HendelError = <div>
            <p>Error:{error?.message}</p>
          </div>
        
      }
      if (loading) {
        return( <Loading></Loading>)
       
      }
      if(user) {
        navigate(from, { replace: true });
      }
     



    return (
        <div>
           
            <button onClick={() => signInWithGoogle()} className='text-center icon-btn'><FcGoogle></FcGoogle> Google Sign in</button>
        </div>
    );
};

export default SocalIcon;