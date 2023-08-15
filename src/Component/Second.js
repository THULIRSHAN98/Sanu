import React from 'react';
import './Second.css';
import images from '../Assets/1.webp';
import ContactForm from './ContactForm';
import AboutUs from './AboutUs';


const First = () => {
  return (
 <div className="background-container" style={{ backgroundColor: '#f5f5f5' }}>


      <div className="container-first">
        <img src={images} className="img-fluid" alt="Business and Personal Finance" />
        <div className="content">
          <div className="overlay">
            <p className="overlay-text">Business And Personal Finance</p>
            <div className="links-container">
              <a href="https://www.iykons.com/">Iykons</a>
              <span className="link-space">{' '}</span>
              <a href="https://www.iykons.com/services/" className="services-link">Services</a>
            </div>
          </div>

        <div className="paragraph-section">
          <div className="styled-paragraph">
                <AboutUs/>
               
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default First;
