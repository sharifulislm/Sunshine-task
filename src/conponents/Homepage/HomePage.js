import React from 'react';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import KidsService from '../KidsService/KidsService';
import Teacher from '../Teacher/Teacher';


const HomePage = () => {
    return (
        <div>
            <Home></Home>
         
            <Courses></Courses>
            <Teacher></Teacher>
            <KidsService></KidsService>
            

            
        </div>
    );
};

export default HomePage;