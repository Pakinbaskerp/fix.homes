import React from 'react';
import './App.css';
import SmallCard from './components/SmallCard';
import LabelBottom from './components/LabelBottomSticky';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="small-card-container">
        <SmallCard/>
       
      </div>
      <LabelBottom />
    </div>
  );
}

export default App;