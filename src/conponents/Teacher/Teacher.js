import React from 'react';
import img from '../image/78979306_2490940897671711_6009315844524343296_n.jpg';
import './Teacher.css';
import { AiOutlineArrowRight } from "react-icons/ai";

const Teacher = () => {
    return (
        <div id='Courses' className='container'>
        <div className='contents-box text-center mt-6'>
         <h2 className='hadding  mt-5'> About Teacher</h2>
        <div className='border-hadding'></div>
   </div>

   <div className='d-flex row justify-content-center align-items-center m-2 '>
                <div className='col-12 col-lg-6 col-md-6'>
                    <img  className='w-75 teacher-img' src={img} alt="" />
                 
                </div>
                <div className='col-12 col-lg-6 col-md-6'>
                
            
                <p>My Personality Consists Of Different Characteristic Traits And Habits Which Help Me Make A Decent Human Being I Am <b>Taizul islam</b> </p>
        <p>Teachers play an essential role in our life as an ideal teacher is responsible for the development of the students. Teachers play a vital role in creating a strong foundation of basic knowledge, not only regarding subjects but also for life. It is mostly what we learn at school that helps us throughout our lives when we have to make important decisions and perform other ...</p>

        <button className='teacher' >Learn more <AiOutlineArrowRight></AiOutlineArrowRight> </button>


                </div>
            </div>
        </div>
    );
};

export default Teacher;