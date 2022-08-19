import React, { useEffect, useState } from 'react';
import CoursesBox from '../CoursesBox/CoursesBox';
import './Courses.css';

const Courses = () => {
     
    const [courses,setCourses]=useState([]);
    

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
         .then(data => setCourses(data))
    } ,[])


    return (
        <div id='Courses' className='container'>
             <div className='contents-box text-center mt-6'>
              <h2 className='hadding  mt-5'> Our Most Popular Courses</h2>
             <div className='border-hadding'></div>
        </div>

        <div className='d-flex row justify-content-center  '>
    

            {
                courses.map(courses => <CoursesBox key={courses.id} courses={courses} ></CoursesBox>)
            }
     
        </div>
  

            
        </div>
    );
};

export default Courses;