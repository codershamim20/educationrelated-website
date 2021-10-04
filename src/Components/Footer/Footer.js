import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        
            <div className="container-fluid bg-secondary">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col-5 ">
    <ul className="list-group list-group-flush ">
  <li className="list-group-item bg-secondary">Home</li>
  <li className="list-group-item bg-secondary">About</li>
  <li className="list-group-item bg-secondary">Services</li>
  <li className="list-group-item bg-secondary">Academic</li>
  
</ul></div>
    <div className="col-5 my-auto"><p>UNIVERSITY OF PROGRAMMING HERO - SINCE 1827</p></div>
                <div className="col-1 my-auto"><i class="fab fa-facebook"></i> <br/><i className="fab fa-instagram-square"></i>
               
                </div>
    
  </div>
</div>
        
    );
};

export default Footer;