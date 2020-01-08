import React, { Component } from 'react';
import './styles/components/App.css';
import Header from './Header';
import CardsContainer from './CardsContainer';
import StarRating from './poc-components/StarRating';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from './Card';
class App extends Component {

  constructor() {
    super();
    this.state = {
      cards: [],
      loading: false,
      searchVal: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('change spotted');
    this.setState({searchVal: event.target.value});
  }
  handleSubmit(event) {
    console.log('submit spotted');
    event.preventDefault();
    this.setState(
        {
            loading: true
        }
    );

    const searchWord = this.state.searchVal;
    let apiUrl = `https://api.magicthegathering.io/v1/cards?name=${searchWord}&language=french`;
    fetch(apiUrl)
        .then(function (response) { return response.json(); })
        .then((data) => {
            this.setState(
                {
                    cards: data.cards,
                    loading: false
                }
            );
        });
}



  render() {
    let cards = this.state.cards.map((card) => {
      if (card.cardImgUrl !== null && card.cardImgUrl !== '') {
        return (
          <Col key={card.multiverseid}><Card key={card.multiverseid} cardImgUrl={card.imageUrl} /></Col>
        );
      }
      else {
        return null;
      }
    });

    if (cards == null || cards.length === 0) {
      cards = <Col ><Card /></Col>;
    }
    const mainContent = this.state.loading ? <Spinner animation="grow" /> : cards;

    return (
      <div className="mtg">
        <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchValue={this.state.searchVal}/>
        <div>
          <CardsContainer content={mainContent}/>
        </div>
        <hr />
        <StarRating totalStars={6} />
      </div>
    );
  }
}

export default App;
