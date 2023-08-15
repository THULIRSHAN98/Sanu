import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="wrapper">
      <div className="inner">
    
        <form action="">
          <h3>Contact Us</h3>
          <p>
          Submitting your details indicates your acceptance that IYKONS will process your personal data in line with UK-GDPR. Normally you could expect a reply from IYKONS within two business days.
          </p>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Mail</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" className="form-control" required></textarea>
          </div>
          <button className="submit-button">
            Submit <i className="zmdi zmdi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
