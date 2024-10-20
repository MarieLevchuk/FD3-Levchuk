import React from "react";
import './Form.css';

export default class Form extends React.Component{
    state = {
        mode: this.props.mode,
        model: this.props.model
    }

    render(){
        return (
            <div className="Form">
                <div className="Form__title">Редактирование</div>
                <div className="Form__id">
                    <span>ID: </span>
                </div>
                <div className="Form__name">
                    <span>Наименование </span>
                    <input type="text" name="name" />
                    <span className="Form__error">Наименование error</span>
                </div>
                <div className="Form__price">
                    <span>Цена </span>
                    <input type="text" name="price" />
                    <span className="Form__error">Наименование error</span>
                </div>
                <div className="Form__url">
                    <span>Ссылка </span>
                    <input type="text" name="url" />
                    <span className="Form__error">Наименование error</span>
                </div>
                <div className="Form__quantity">
                    <span>Количество </span>
                    <input type="text" name="quantity" />
                    <span className="Form__error">Наименование error</span>
                </div>

                <button>Сохранить</button>
                <button>Отмена</button>
            </div>
        );
    }
}