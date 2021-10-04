import React, { useEffect, useState } from 'react';
import Service from '../Service/Services';



const Course = () => {
    const [service, setService] = useState([]);
    // iteams on cart 
    
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h2 className='text-center'>Courses</h2>
            <div className="row">
                <div className="col-md-12">
                    {/* card-display-area */}
                    <div className="row g-2">
                        {
                            cards.map(service => <Service
                                key={service.id}
                                handleAddIteam={handleAddIteam}
                                card={service}
                            >

                            </Service>)
                        }
                    
                    
                    </div>
                    
                </div>
               
            </div>
        </div>
    );
};

export default Course;