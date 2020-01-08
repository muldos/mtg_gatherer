import React, { Component } from 'react';
import './styles/components/CardsContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class CardsContainer extends Component {
    render() {
  
        return (
            <Container>
                <Row>
                    {this.props.mainContent}
                </Row>
            </Container>
        );
    }
}
export default CardsContainer;