import React from 'react';

const Card = (props) => {
    const{courses,img,country,rating,duration,cost}=props.card||{}
    return (
        <div className="col-md-3">
            <div className="card mb-3 h-100 bg-info" >
  <div className="row  ">
    {/* <div className="col-md-5">
      
    </div> */}
            <div className="col-md-12 text-center p-5">
            <img src={img} className="  rounded mx-auto d-block" width="180px" height="180px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Diploma in {courses}</h5>
        <p className="card-text">Duration: {duration}</p>
        <p className="card-text">Conducted From {country} </p>
        <p className="card-text">Rating: {rating} </p>
        <p className="card-text">Course Fee: ${cost}</p>
        <button type="button"
        className="btn btn-primary"> <i className="fas fa-shopping-cart"></i> Purchse </button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;