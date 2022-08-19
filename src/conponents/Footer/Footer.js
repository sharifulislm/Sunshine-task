import React from 'react';
import { FaFacebook } from "react-icons/fa";
import {AiFillGooglePlusCircle} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineLogin} from "react-icons/ai";
import './Footer.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link } from 'react-router-dom';


const Footer = () => {
    const [user]= useAuthState(auth);
    return (
        <div className=' m-auto text-center bg-black  text-white'>
            <div className='aline-border'></div>

            <div className='d-flex row justify-content-between mt-5 mt-5 align-items-center'>
             <div className='pera text-white col-12 col-lg-3 col-md-3'>

<Link to="/KidsService"> Active </Link> <br></br>
<Link to="/Courses"> Courses </Link><br></br>
<Link to="/"> Home </Link>
             </div>
             <div className='pera text-white col-12 col-lg-3 col-md-3  mt-5'>
             
      <span className='text-white'>Design</span>
      <br></br>
      <span>Branding</span>
      <br></br>
      <span>Marketing</span>
      <br></br>


             </div>

             <div className='socal-icon  col-12 col-lg-4 col-md-3'>
               <FaFacebook></FaFacebook>
               <AiFillGooglePlusCircle></AiFillGooglePlusCircle>
               <AiFillTwitterCircle></AiFillTwitterCircle>
             
         
          {
            user ?  <p>your are currently subscribed as {user?.email}</p> :
            
            <Link to="/Signup"> <AiOutlineLogin></AiOutlineLogin></Link>
          }
            



             </div>


            </div>
        </div>
    );
};

export default Footer;