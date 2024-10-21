import React from "react";
import PropTypes from "prop-types";
import './Form.css';

export default class Form extends React.Component{

    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string,
        quantity: PropTypes.number,
    }

    state = {
        name: this.props.name,
        price: this.props.price,
        url: this.props.url,
        quantity: this.props.quantity
    }

    inputValueChange = (e) => {
        let input = e.target.name;
        let value = e.target.value;

        this.setState({[input]: value});
    }

    saveForm = () => {
        let model = {
            name: this.state.name,
            price: this.state.price,
            url: this.state.url,
            quantity: this.state.quantity
         }

        if(this.props.mode === 'create'){
            this.props.cbCreateItem(model);
        }

        if(this.props.mode === 'update'){
            // this.props.cbUpdateItem(model);
        }
    }

    closeForm = () => {
        this.props.cbCloseForm();
    }

    render(){
        return (
            <div className="Form">
                <div className="Form__title">{this.props.mode}</div>
                <div className="Form__id">
                    <span>ID: {this.props.id}</span>
                </div>
                <div className="Form__name">
                    <span>Наименование </span>
                    <input type="text" name="name" value={this.state.name ?? ''} onChange={this.inputValueChange}/>
                    <span className="Form__error">Наименование error</span>
                </div>
                <div className="Form__price">
                    <span>Цена </span>
                    <input type="text" name="price" value={this.state.price ?? ''} onChange={this.inputValueChange}/>
                    <span className="Form__error">Наименование error</span>
                </div>
                <div className="Form__url">
                    <span>Ссылка </span>
                    <input type="text" name="url" value={this.state.url ?? ''} onChange={this.inputValueChange}/>
                    <span className="Form__error">Наименование error</span>
                </div>
                <div className="Form__quantity">
                    <span>Количество </span>
                    <input type="text" name="quantity" value={this.state.quantity ?? ''} onChange={this.inputValueChange}/>
                    <span className="Form__error">Наименование error</span>
                </div>

                <button onClick={this.saveForm}>Сохранить</button>
                <button onClick={this.closeForm}>Отмена</button>
            </div>
        );
    }
}