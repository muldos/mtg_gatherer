import React from 'react';
import './styles/components/CardsContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CardsContainer = ({mainContent}) => (
    <Container>
    <Row>
        {mainContent}
    </Row>
</Container>  
);
export default CardsContainer;