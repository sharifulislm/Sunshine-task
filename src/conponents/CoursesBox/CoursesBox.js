import React from 'react';
import { useNavigate } from 'react-router-dom';


import './CoursesBox.css';


const CoursesBox = ({courses}) => {

const navigate = useNavigate()
       
    const{id,name,picture,price,documentation}=courses;

    const navigatetoCourseDetails = id => {
        navigate(`Courses/${id}`);
    }

    




  

    return (
 <div className='col-12 col-md-6 col-lg-3 card-box'>
<div >
    <img className='w-100' src={picture} alt="" />
</div>
<div>
    <h3>{name.slice(0, 17)}</h3>
  
    <p>{documentation.slice(0, 100)}...</p>
</div>
<div className='d-flex justify-content-between'>

<button onClick={() => navigatetoCourseDetails(id)} className='btn-chacout'> Check Out </button>

<h5 className='price'>Price: {price}$</h5>
</div>



 </div>
 
    );
};

export default CoursesBox;