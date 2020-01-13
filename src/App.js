import React, { Component } from 'react';
import './styles/components/App.css';
import Header from './Header';
import CardsContainer from './CardsContainer';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from './Card';
class App extends Component {

  constructor() {
    super();
    this.state = {
      cards: [],
      loading: false,
      searchSuggestionIsLoading: false,
      firstTime: true,
      suggestions: [],
      searchVal: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSuggestSelectionChange = this.handleSuggestSelectionChange.bind(this);
    this.handleSearchSuggestion = this.handleSearchSuggestion.bind(this);
  }

  handleSuggestSelectionChange(value) {
    this.setState({searchVal: value[0]});
  }
  handleInputChange(value) {
    this.setState({searchVal: value});
  }
  handleSearchSuggestion = (query) => {
    this.setState({searchSuggestionIsLoading: true});

    const searchWord = encodeURI(query);
    let apiUrl = `https://api.scryfall.com/cards/autocomplete?q=${searchWord}`;
    fetch(apiUrl)
      .then(function (response) {return response.json();})
      .then(({data,total_values }) => {
          this.setState(
              {
                  searchSuggestionIsLoading: false,
                  suggestions: data
              }
          );
      });
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
        .then(function (response) {return response.json();})
        .then((data) => {
            this.setState(
                {
                    cards: data.data || [],
                    loading: false,
                    firstTime: false
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
      cards = this.state.firstTime ? <Col ><Card /></Col> : <Col >No result found</Col>;
    }

    const mainContent = this.state.loading ? <Spinner animation="border" /> : cards;

    return (
      <div className="mtg">
        <Header
         handleInputChange={this.handleInputChange}
         handleSubmit={this.handleSubmit} 
         handleSuggestSelectionChange={this.handleSuggestSelectionChange}
         handleSearchSuggestion={this.handleSearchSuggestion}
         searchValue={this.state.searchVal}
         suggestions={this.state.suggestions}
         searchSuggestionIsLoading={this.state.searchSuggestionIsLoading}
         />
        <div>
          <CardsContainer mainContent={mainContent}/>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
