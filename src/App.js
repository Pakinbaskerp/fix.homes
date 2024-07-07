import React from 'react';
import './App.css';
import LabelBottom from './components/LabelBottomSticky';
import Header from './components/Header';
import CarouselComponent from './components/CarouselComponent';
import AboutSection from './components/Experience';
import OurPromise from './components/OurPromises';
import ServicesSection from './components/OurServices';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="small-card-container">
        <CarouselComponent />
      </div>     
      <div className="about-section-container">
        <AboutSection />
      </div>
      <div className="App">
        <ServicesSection/>
      </div>
      <div className="App">
      <OurPromise />
    </div>
      <LabelBottom />
    </div>
  );
}

export default App;
