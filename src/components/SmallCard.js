import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useInView } from 'react-intersection-observer';

import Hero0 from '../images/hero0.jpeg';
import Hero1 from '../images/hero1.jpg';
import Hero2 from '../images/hero2.jpeg';
import Hero3 from '../images/hero3.jpeg';

const images = [
  { src: Hero0, alt: 'Stage decoration', text: 'Stage decoration' },
  { src: Hero1, alt: 'Drums', text: 'Drums' },
  { src: Hero2, alt: 'Name 3', text: 'Name 3' },
  { src: Hero3, alt: 'Name 4', text: 'Name 4' },
];

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        width: '100vw',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        },
      }}
    >
      {images.map((image, index) => (
        <LazyImage key={index} src={image.src} alt={image.alt} text={image.text} />
      ))}
    </Box>
  );
}

const LazyImage = ({ src, alt, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Paper elevation={3} ref={ref}>
      {inView && <img src={src} alt={alt} style={{ width: '100%', height: '80%', objectFit: 'cover' }} />}
      <p
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: 'center',
          margin: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}
      >
        {text}
      </p>
    </Paper>
  );
};
