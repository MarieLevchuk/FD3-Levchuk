import React from "react";
import './Card.css';

export default class Card extends React.Component{

    selectItem = e => {
        this.props.cbSelectItem(e.currentTarget.id);
    }
    
    deleteItem = e => {
        e.stopPropagation();
        if(window.confirm('Удалить товар?')){
            this.props.cbDeleteItem(e.target.parentNode.id);
        }
    }

    editItem = e => {
        e.stopPropagation();
        
    }

    render(){
        return(
            <div id={this.props.model.id} className={ (this.props.isSelected == this.props.model.id)?'Card selected' : 'Card'} onClick={this.selectItem}>
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

                <button className="Card__edit-btn" onClick={this.editItem}>Редактировать</button>
                <button className="Card__delete-btn" onClick={this.deleteItem}>Удалить</button>
            </div>
        );
    }
}