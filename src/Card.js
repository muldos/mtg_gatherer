import React, { Component } from 'react';
import './styles/components/Card.css';
import BootCard  from 'react-bootstrap/Card';
import defaultCardBack from './img/card-back.jpg';
class Card extends Component {
    /**
     * props constraints and default values
     */
    static propTypes = { 
        cardImgUrl: (props, propName) => {
            if((typeof props[propName] !== 'string') ) {
                return new Error("invalid url : not a string");
            }
            else {
                if((props[propName].indexOf('http') === 0) || (props[propName].indexOf('/') === 0)) {
                    return null;
                }
                else {
                    
                    new Error("invalid url");
                }
            }
        }
    }
    
    static defaultProps = {
        cardImgUrl: defaultCardBack
    }

    /**
     * Lifecycle methods
     */

    componentDidMount() {
       // console.log('did mount');
    }
    componentWillUnmount(){
        //console.log('will unmount');
    }
    render(){
        const {cardImgUrl} = this.props;
        return(
            <BootCard style={{ width: '14rem' }}>
                <BootCard.Img fluid="true" src={cardImgUrl} />
            </BootCard>);
    }
}

export default Card;