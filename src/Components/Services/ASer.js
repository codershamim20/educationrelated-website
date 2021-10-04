import React, { useEffect, useState } from 'react';
import Abcard from '../single-card/Abcard';

const ASer = () => {
    const [abcard, setAbcard] = useState([]);
    
    
    useEffect(() => {
        fetch('./hero.json')
            .then(res => res.json())
            .then(data => setAbcard(data));
    },[])
    return (
        <div >
            
            <div className="row mb-5">
                <div className="col-md-12">
                    {/* card-display-area */}
                    <div className="row g-3">
                        {
                            abcard.map(abcar => 
                            <div className="col-md-3">
            <div className="card mb-3 h-100 bg-secondary" >
  <div className="row  ">
    <div className="col-md-5">
      <img src={abcar.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Name: {abcar.name}</h5>
        <p className="card-text">Role: {abcar.designation}</p>
        <p className="card-text">{abcar.country} </p>
        <p className="card-text">Rating: {abcar.rating} </p>
        <p className="card-text">Salary: ${abcar.salary}</p>
        <button type="button"
        className="btn btn-primary"> Details</button>
      </div>
    </div>
  </div>
</div>
        </div>)
                                
                        }
                        
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ASer;