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
    this.setState({searchVal: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(
        {
            loading: true
        }
    );

    const searchWord = encodeURI(this.state.searchVal);
    let apiUrl = `https://api.scryfall.com/cards/search?order=rarity&q=${searchWord}`;
    fetch(apiUrl)
        .then(function (response) {console.log('response ok'); return response.json(); })
        .then((data) => {
          console.log(data);
            this.setState(
                {
                    cards: data.data || [],
                    loading: false
                }
            );
        });
}



  render() {

    let cards = this.state.cards.map((card) => {
      if (card.image_uris !== null && card.image_uris !== undefined && card.image_uris.png !== null && card.image_uris.png !== '') {
        return (
          <Col key={card.id}><Card key={card.id} cardImgUrl={card.image_uris.png} /></Col>
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
          <CardsContainer mainContent={mainContent}/>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
