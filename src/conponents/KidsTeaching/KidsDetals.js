import React from 'react';
import img from'../image/about.png';

const KidsDetals = () => {
    return (
        <div id='Courses' className='container'>
        <div className='contents-box text-center mt-6'>
         <h2 className='hadding  mt-5'> About Our KidsAcademy</h2>
        <div className='border-hadding'></div>
   </div>

   <div className='d-flex row justify-content-center align-items-center '>
                <div className='col-12 col-lg-6 col-md-6'>
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className='col-12 col-lg-6 col-md-6'>
        <h1> </h1>
        <p> Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional</p>


                </div>
            </div>
        </div>
    );
};

export default KidsDetals;