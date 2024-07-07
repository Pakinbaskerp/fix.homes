import React from 'react';
import './OurPromises.css';
import { Typography } from '@mui/material';

import QC from '../images/qc.svg';
import TC from '../images/tc.svg';
import TD from '../images/td.svg';
import OS from '../images/os.svg';
import CS from '../images/cs.svg';

const OurPromise = () => {
  const features = [
    {
      imgSrc: QC,
      title: 'Quality Craftsmanship',
      description: 'We take pride in our work, ensuring each project is crafted with precision and creativity. From concept to execution, we uphold the highest standards of quality.',
    },
    {
      imgSrc: TC,
      title: 'Transparent Communication',
      description: 'Your ideas matter, and we value your input. We promise open and transparent communication every step of the way, keeping you informed and involved throughout the process.',
    },
    {
      imgSrc: TD,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines. Our team works diligently to ensure timely delivery without compromising on quality, so your vision becomes a reality promptly.',
    },
    {
      imgSrc: OS,
      title: 'Ongoing Support',
      description: 'Our commitment doesn’t end with project completion. We’re here for you, offering continuous support, updates, and maintenance to ensure your long-term satisfaction and success.',
    },
    {
      imgSrc: CS,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We promise to listen to your feedback, address concerns promptly, and go above and beyond to ensure you’re delighted with our services.',
    },
  ];

  return (
    <div className="container px-4 py-5" id="featured-3">
     <Typography variant="h4" gutterBottom>
        Our Promises
      </Typography>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              <img src={feature.imgSrc} loading="lazy" className="bi" alt={feature.title} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            {/* Render description only on desktop */}
            <p className="feature-description d-none d-md-block">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPromise;
