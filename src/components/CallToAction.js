import React, { useState } from 'react';
import './CallToAction.css';

import { Typography } from '@mui/material';

const CallToAction = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="call">
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <div className="container pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3">
        <div className="row pt-sm-3 pt-md-4">
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <h2 className="display-6">
              Ready to elevate your carpentry skills to craft beautiful and functional pieces?
            </h2>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
            <p className="fs-xl pb-4 mb-2 mb-lg-3 display-7 p-5">
              Why not invest some time today and schedule an appointment to explore the endless possibilities between our teams? I'm eager to connect with you soon!
            </p>
          </div>
        </div>
        <div className="py-5">
          <button className='btn btn-dark fs-xl w-100 h-1 mb-1' onClick={togglePopup} style={{ position: 'relative' }}>
            Make a free Call
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>&times;</span>
           
            <form className="quote-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="services">Services:</label>
                <input type="text" id="services" name="services" required />
              </div>
              <button type="submit" className="btn btn-primary">Get a Quote</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CallToAction;
