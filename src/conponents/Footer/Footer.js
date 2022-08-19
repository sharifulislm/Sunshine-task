import React from 'react';
import { FaFacebook } from "react-icons/fa";
import {AiFillGooglePlusCircle} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import './Footer.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Footer = () => {
    const [user]= useAuthState(auth);
    return (
        <div className='container mb-5 mt-5'>
            <div className='aline-border'></div>

            <div className='d-flex row justify-content-between mt-5 mt-5 align-items-center'>
             <div className='pera col-12 col-lg-6 col-md-6'><p>© Copyright teacherAcademy2022 All Rights Reserved</p></div>

             <div className='socal-icon  col-12 col-lg-6 col-md-6'>
               <FaFacebook></FaFacebook>
               <AiFillGooglePlusCircle></AiFillGooglePlusCircle>
               <AiFillTwitterCircle></AiFillTwitterCircle>
               <p>your email {user?.email}</p>



             </div>


            </div>
        </div>
    );
};

export default Footer;