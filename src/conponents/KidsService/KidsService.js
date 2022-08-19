import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import KidsTeaching from '../KidsTeaching/KidsTeaching';

const KidsService = () => {

    const [service ,setService] = useState([]);


    useEffect(() => {
  
      fetch('Kids.json')
      .then(res => res.json())
      .then(data => setService(data))
    }
    ,[])
    return (
        <div className='container'>
        <div className='contents-box text-center mt-6'>
                      <h2 className='hadding  mt-5'> Active Learning</h2>
                     <div className='border-hadding'></div>
                </div>
        
        <div className='d-flex row justify-content-center'>
        
          {
        
        service.slice(0, 3).map(service=> <KidsTeaching key={service.id} service={service}></KidsTeaching>)

        
          }
 
        </div>

       
        </div>
    );
};

export default KidsService;