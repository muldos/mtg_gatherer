import React, { Component } from 'react';
import './styles/components/Card.css';
import BootCard from 'react-bootstrap/Card';
import defaultCardBack from './img/card-back.jpg';
import { FaImage, FaBook } from "react-icons/fa";
import { IconContext } from "react-icons";
class Card extends Component {
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
                <BootCard.Text>
                    <IconContext.Provider value={{ color: "#404040", size: "1.5em" }}>
                        <FaImage /> <FaBook />
                    </IconContext.Provider>
                </BootCard.Text>
            </BootCard>);
    }
}

export default Card;