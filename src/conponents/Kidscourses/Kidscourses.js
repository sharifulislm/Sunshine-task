import React from 'react';
import { useParams } from 'react-router-dom';

const Kidscourses = () => {

    const {Kidscourse}=useParams();
    console.log(Kidscourse);

                                                                                                                                                         

    return (
        <div>

            <h1>this is page</h1>
            
        </div>
    );
};

export default Kidscourses;