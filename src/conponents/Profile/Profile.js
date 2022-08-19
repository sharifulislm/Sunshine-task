import React from 'react';
import img from '../image/sharifulislam26630.jpg';
import './Profile.css';
import { AiOutlineArrowRight } from "react-icons/ai";

const Profile = () => {
    return (
        <div className='container mt-5 mb-5 p-3'>
           <div className='d-flex row justify-content-center align-items-center'> 
               
               <div className='col-12 col-lg-6 col-md-6'> <img className='w-75' src={img} alt="" /></div>
               <div className='col-12 col-lg-6 col-md-6'>
                  <span className='hi'> HI THERE !</span>
<h2 className='name'> I'M<span className='im'> Shariful Islam </span> </h2>
                    <p> 
Looking forward to gain a position as ‘Web developer’ in Kuwait where I will be able to execute my learnings and ideas. My passion is exploring new ideas and knowledge related to web development and fixing my career in the area of Web development. A highly committed individual with the ability to accurately keep responsibilities in world by utilizing my web development expertise. </p>

<button className='about-btn'>Contact me <AiOutlineArrowRight></AiOutlineArrowRight></button>
</div>


               </div> 
           
           


        </div>
    );
};

export default Profile;