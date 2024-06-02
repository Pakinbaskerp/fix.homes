import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../logo.svg'

const items = [
  {
    imgPath: Logo,
    title: 'Photo 1',
  },
  {
    imgPath: Logo,
    title: 'Photo 2',
  },
  {
    imgPath: Logo,
    title: 'Photo 3',
  },
  {
    imgPath: Logo,
    title: 'Photo 4',
  },
  {
    imgPath: Logo,
    title: 'Photo 5',
  },
];

const PhotoCardSlider = () => {
  return (
    <div id="photoCardSlider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={item.imgPath}
              className="d-block w-100"
              alt={item.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <button type="button" className="btn btn-primary">
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#photoCardSlider"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#photoCardSlider"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default PhotoCardSlider;
