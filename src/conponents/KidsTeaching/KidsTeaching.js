import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import './KidsTeachin.css';
// import PrivateCourse from '../PrivateCourse/PrivateCourse';

const KidsTeaching = (Props) => {
    const {service}= Props;
    const [servise1,setServise] = useState([])



    const{id,name,picture,price,documentation,classTime}=service;
 const navigate = useNavigate()

 const HandleNavigate = ()=> {
    navigate('/KidsDetals')
   
 };
//  const PrivateCourse =(service) =>{
//  setServise(service);
 
//  };
 

    return (
        <div className='col-12 col-md-6 col-lg-4 mb-6 card-box'>
<div >
    <img className='w-100' src={picture} alt="" />
</div>
<div>
    <h3>{name.slice(0, 17)}</h3>
    <h5>{classTime}</h5>
  
    <p>{documentation}</p>
</div>
<div className='d-flex justify-content-between'>

<button onClick={HandleNavigate} className='btn-chacout-discover mb-5'> DISCOVER MORE <AiFillCaretRight></AiFillCaretRight> </button>
{/* <button onClick={} className='btn-chacout-discover'> Private Course <AiFillCaretRight></AiFillCaretRight> </button> */}




</div>

{/* <PrivateCourse servise1={servise1}></PrivateCourse> */}

 </div>
    );
};

export default KidsTeaching;