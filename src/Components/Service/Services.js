import React from 'react';
import  { useEffect, useState } from 'react';
const Service = (props) => {
  const [servic, setServic] = useState([]);
  useEffect(() => {
    fetch('../services.json')
        .then(res => res.json())
    .then(data=>console.log(data))
},[])
    const{course,img,country,rating,duration,cost}=props.servic||{}
    // console.log(props.servic)
    return (
        <div className="col-md-3 my-3">
            <div className="card mb-3 h-100 bg-success" >
  <div className="row  ">
    <div className="col-md-5">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Name: {course}</h5>
        <p className="card-text">Duration: {duration}</p>
        <p className="card-text">{country} </p>
        <p className="card-text">Rating: {rating} </p>
        <p className="card-text">Course Fee: ${cost}</p>
        <button type="button" 
        onClick={()=>props.handleAddIteam(props.service)}
        className="btn btn-primary"> <i className="fas fa-shopping-cart"></i> Purchase</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;