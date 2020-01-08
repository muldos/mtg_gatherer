import React, { Component } from 'react';
import './styles/components/CardsContainer.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Card from './Card';

class CardsContainer extends Component {

    constructor(){
        super();
        this.state = {
            cards: [],
            loading: false
        }
    }
    
    componentDidMount(){
        this.setState(
            {
                loading: true
            }
        );
        
        const searchWord = 'garruk';
        let apiUrl = `https://api.magicthegathering.io/v1/cards?name=${searchWord}&language=french`;
        fetch(apiUrl)
        .then(function(response) { return response.json(); })
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

    let cards = this.state.cards.map((card) =>  { 
        if(card.cardImgUrl !== null && card.cardImgUrl !== ''){
            return(
                <Col key={card.multiverseid}><Card key={card.multiverseid} cardImgUrl={card.imageUrl}/></Col>
            );    
        }
        else {
            return null;
        }
    });

    if(cards == null ||cards.length === 0) {
        cards = <Col ><Card /></Col>;
    }
        const mainContent =  this.state.loading ? <Spinner animation="grow" /> :  cards;
        return (
            <Container>
                 <Row>
                   {mainContent}
                </Row>
            </Container>);
    }
}
export default CardsContainer;