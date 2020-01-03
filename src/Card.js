import React, { Component } from 'react';
import './styles/components/Card.css';
import BootCard  from 'react-bootstrap/Card';

class Card extends Component {
    /**
     * props constraints and default values
     */
    static propTypes = { 
        cardImgUrl: (props, propName) =>
        (typeof props[propName] !== 'string') ? new Error("invalid url : not a string") :
            (props[propName].indexOf('http') === 0) ? new Error(`invalid url: doesn't start with http`) : null
    }
    
    static defaultProps = {
        cardImgUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=470713&type=card"
    }

    /**
     * Lifecycle methods
     */

    render(){
        const {cardImgUrl} = this.props;
        return(
            <BootCard style={{ width: '14rem' }}>
                <BootCard.Img fluid="true" src={cardImgUrl} />
            </BootCard>);
    }
}

export default Card;