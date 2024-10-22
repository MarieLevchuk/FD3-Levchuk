import React from "react";
import './Form.css';

export default class Form extends React.Component{
    state = {
        name: this.props.name,
        price: this.props.price,
        url: this.props.url,
        quantity: this.props.quantity,

        errors: {
            name: (this.props.mode === 'create') ? this.getErrorMessage('required') : '',
            price: (this.props.mode === 'create') ? this.getErrorMessage('required') :'',
            url: '',
            quantity: ''
        }
    }

    getErrorMessage(rule, val = null) {
        switch (rule) {
            case 'required':
              return 'Поле обязательно для заполнения';
            case 'min':
              return `Поле должно содержать не менее ${val} символов`;
            case 'max':
              return `Поле должно содержать не более ${val} символов`;
            case 'number':
                return 'Поле должно содержать только цифры';
            default:
              return '';
        }
    }

    inputValueChange = (e) => {
        
        let input = e.target.name;
        let value = e.target.value;

        this.validateValue(input, value);

        this.setState({[input]: value}, this.handleChanges(true));
    }

    validateValue = (input, value) => {
        let errors = {...this.state.errors};

        if(input === 'name'){
            if(!value.trim()){
                errors[input] = this.getErrorMessage('required');
            } else if(value.trim().length < 3){
                errors[input] = this.getErrorMessage('min', 3);
            } else {
                errors[input] = '';
            }
        }
        if(input === 'price'){
            if(!value.trim()){
                errors[input] = this.getErrorMessage('required');
            } else if(!/^\d+$/.test(value)){
                errors[input] = this.getErrorMessage('number');
            } else {
                errors[input] = '';
            }
        }
        if(input === 'quantity'){
            if(!/^\d+$/.test(value)){
                errors[input] = this.getErrorMessage('number');
            } else {
                errors[input] = '';
            }
        }

        this.setState({errors: errors});

    }

    handleChanges = (status) => {
        this.props.cbHandleChanges(status);
    }

    saveForm = () => {
        let model = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            url: this.state.url
         }

        if(this.props.mode === 'create'){
            this.props.cbCreateItem(model);
        }

        if(this.props.mode === 'edit'){
            model.id = this.props.id;
            this.props.cbUpdateItem(model);
        }
        this.handleChanges(false);
    }

    closeForm = () => {
        this.handleChanges(false);
        this.props.cbCloseForm();
    }

    render(){
        return (
            <div className="Form">
                {
                    (this.props.mode === 'create')&&
                    <div className="Form__title" style={{fontWeight:500}}>Добавить новый продукт</div>
                }
                {
                    (this.props.mode === 'edit')&&
                        <>
                            <div className="Form__title" style={{fontWeight:500}}>Редактировать запись</div>
                            <div className="Form__id">
                                <span>ID: {this.props.id}</span>
                            </div>
                        </>
                }
                
                <div className="Form__name">
                    <span>Наименование </span>
                    <input type="text" name="name" value={this.state.name ?? ''} onChange={this.inputValueChange}/>
                    <span className="Form__error">{this.state.errors.name}</span>
                </div>
                <div className="Form__price">
                    <span>Цена </span>
                    <input type="text" name="price" value={this.state.price ?? ''} onChange={this.inputValueChange}/>
                    <span className="Form__error">{this.state.errors.price}</span>
                </div>
                <div className="Form__url">
                    <span>Ссылка </span>
                    <input type="text" name="url" value={this.state.url ?? ''} onChange={this.inputValueChange}/>
                    <span className="Form__error">{this.state.errors.url}</span>
                </div>
                <div className="Form__quantity">
                    <span>Количество </span>
                    <input type="text" name="quantity" value={this.state.quantity ?? ''} onChange={this.inputValueChange}/>
                    <span className="Form__error">{this.state.errors.quantity}</span>
                </div>

                {
                    (this.props.mode === 'edit')&&
                        <button disabled={!Object.values(this.state.errors).every(err => err === '')} onClick={this.saveForm}>Сохранить</button>
                }
                {
                    (this.props.mode === 'create')&&
                        <button disabled={!Object.values(this.state.errors).every(err => err === '')} onClick={this.saveForm}>Добавить</button>
                }
                
                <button onClick={this.closeForm}>Отмена</button>
            </div>
        );
    }
}