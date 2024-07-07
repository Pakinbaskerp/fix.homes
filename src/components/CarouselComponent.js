// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './CarouselComponent.css'; 

// import Hero0 from '../images/hero0.jpeg';
// import Hero1 from '../images/hero1.jpg';
// import Hero2 from '../images/hero2.jpeg';
// import Hero3 from '../images/hero3.jpeg';

// const CarouselComponent = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
    
//   };

//   return (
//     <div className="carousel-container">
//       <Slider {...settings}>
//         <div className="carousel-item">
//           <img src={Hero0} loading="lazy" alt="Slide 1" className="carousel-logo" />
//         </div>
//         <div className="carousel-item">
//           <img src={Hero1} loading="lazy" alt="Slide 2" className="carousel-logo" />
//         </div>
//         <div className="carousel-item">
//           <img src={Hero2} loading="lazy" alt="Slide 3" className="carousel-logo" />
//         </div>
//         <div className="carousel-item">
//           <img src={Hero3} loading="lazy" alt="Slide 4" className="carousel-logo" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default CarouselComponent;

import React from 'react';
import './CarouselComponent.css'; 

import Hero0 from '../images/hero0.jpeg';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-item" >
        <img src={Hero0} loading="lazy" alt="Slide 1" className="carousel-logo" />
        <div className="overlay-text">
          <h1>Want To Craft Your Home </h1>
          <p>We are here to help you.</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
