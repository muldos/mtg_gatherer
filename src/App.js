import React from 'react';
import './styles/components/App.css';
import Header from './Header';
import CardsContainer from './CardsContainer';
import StarRating from './poc-components/StarRating';

function App() {
  return (
    <div className="mtg">
      <Header/>
      <div>
        <CardsContainer/>
      </div>
      <hr/>
      <StarRating totalStars={6}/>
    </div>
  );
}

export default App;
