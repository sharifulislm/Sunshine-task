import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDatials.css';

const ServiceDatials = () => {
    const [courses, setCourses]=useState([]);
    
    const {CoursesId}=useParams();
    console.log(CoursesId);

    fetch('https://raw.githubusercontent.com/sharifulislm/coaching-session/main/public/data.json')
    .then(res => res.json())
    .then(data => setCourses(data));

    const result = courses.filter(word => word.id === CoursesId);
 
   
    console.log(result);

    return (
        <div className='Details-box m-auto'>

            <h1 className='m-auto'> Our best Courses  {CoursesId.length}</h1>
            <h3 className='mt-3'>Do you want to Continue</h3>
            <Link to="/CheckOut"> <button className='btn btn-primary'> Continue </button> </Link>
            
        </div>
    );
};

export default ServiceDatials;