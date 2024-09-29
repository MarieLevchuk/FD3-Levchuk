import React, { Fragment } from "react";
import './Card.css';

export default class Card extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="Card">
                    <div className="Card__img">
                        <img src={`img/${this.props.model.url??'noimg.jpg'}`} alt="" />
                    </div>
                    <div className="Card__name">
                        {this.props.model.name}
                    </div>
                    <div className="Card__info">
                        <div className="Card__quantity">В наличии: {this.props.model.quantity}</div>
                        <div className="Card__price">${this.props.model.price}</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}