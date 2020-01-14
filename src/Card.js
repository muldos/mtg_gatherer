import React, { Component } from 'react';
import './styles/components/Card.css';
import BootCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import defaultCardBack from './img/card-back.jpg';
import { IoMdEye, IoMdSchool, IoIosShare } from "react-icons/io";

class Card extends Component {

    constructor(){
        super();
        this.state= {
        };
        this.handleClickDetails = this.handleClickDetails.bind(this);
        this.handleClickRuling = this.handleClickRuling.bind(this);
        this.handleClickSharing = this.handleClickSharing.bind(this);
    }
    handleClickDetails(event){}
    handleClickRuling(event){ }
    handleClickSharing(event){}
    /**
     * props constraints and default values
     */
    static propTypes = {
        cardImgUrl: (props, propName) => {
            if ((typeof props[propName] !== 'string')) {
                return new Error("invalid url : not a string");
            }
            else {
                if ((props[propName].indexOf('http') === 0) || (props[propName].indexOf('/') === 0)) {
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
    render() {
        const { cardImgUrl } = this.props;
        return (
            <BootCard style={{ width: '14rem' }}>
                <BootCard.Img fluid="true" src={cardImgUrl} />
                    <ButtonGroup>
                        <Button variant="light"><IoMdEye onClick={this.handleClickDetails}/>Details</Button>
                        <Button variant="light"> <IoMdSchool  onClick={this.handleClickRuling}/>Rules</Button>
                        <Button variant="light"><IoIosShare onClick={this.handleClickSharing}/>Share</Button>
                    </ButtonGroup>
            </BootCard>);
    }
}

export default Card;