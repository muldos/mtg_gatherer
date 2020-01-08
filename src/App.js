import React, {Component} from 'react';
import './styles/components/App.css';
import Header from './Header';
import CardsContainer from './CardsContainer';
import StarRating from './poc-components/StarRating';

class App extends Component {
  render() {
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
}

export default App;
