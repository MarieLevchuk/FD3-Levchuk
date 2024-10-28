import React from "react";
import './Client.css';

import clientsEvents from '../../events/clientsEvents.js';

export default class Client extends React.PureComponent{
    state = {
        firstname: this.props.client.firstname,
        lastname: this.props.client.lastname,
        balance: this.props.client.balance,
        status: this.props.client.balance > 0 ? 'active' : 'blocked',

        editMode: false,
        createMode: false,
    }

    componentDidMount = () => {
        clientsEvents.addListener('close', this.close);
        // clientsEvents.addListener('create', this.create);
    };

    componentWillUnmount = () => {
        clientsEvents.removeListener('close', this.close);
        // clientsEvents.removeListener('create', this.create);
    };

    newFirstnameRef = null;
    newLastnameRef = null;
    newBalanceRef = null;
    
    setNewFirstnameRef = (ref) => {
        this.newFirstnameRef = ref;
    }
    setNewLastnameRef = (ref) => {
        this.newLastnameRef = ref;
    }
    setNewBalanceRef = (ref) => {
        this.newBalanceRef = ref;
    }

    setNewFirstname = () => {
        if(this.newFirstnameRef){
            let firstname=this.newFirstnameRef.value;
            this.setState({firstname:firstname});
            return firstname;
        };

        return this.state.firstname;
    }
    setNewLastname = () => {
        if(this.newLastnameRef){
            let lastname=this.newLastnameRef.value;
            this.setState({lastname:lastname});
            return lastname;
        };

        return this.state.firstname;
    }
    setNewBalance = () => {
        if(this.newBalanceRef){
            let balance=this.newBalanceRef.value;
            this.setState({balance:balance, status:balance > 0 ? 'active' : 'blocked'});
            return balance;
        };

        return this.state.balance;
    }

    save = () => {
        
        let client = {
            id: this.props.client.id,
            firstname: this.setNewFirstname(),
            lastname:this.setNewLastname(),
            balance: this.setNewBalance()
        }

        clientsEvents.emit('edit', client);
    }

    close = () => {
        this.setState({editMode: false});
    }

    handleEditClick = () => {
        this.setState({editMode: true})
    }

    delete = (e) => {
        if(window.confirm('Delete client?')){
            clientsEvents.emit('delete', e.target.parentNode.parentNode.id);
        }
    }

    render(){
        console.log(`client ${this.props.client.id} render()`);
        return(
            <tr id={this.props.client.id} className="Client">
                <td className="Client_firstname">
                    {
                        (this.state.editMode)&&
                        <input type="text" ref={this.setNewFirstnameRef} defaultValue={this.state.firstname} />
                    }
                    {
                        (!this.state.editMode)&&
                        this.state.firstname
                    }
                </td>
                <td className="Client_lastname">
                    {
                        (this.state.editMode)&&
                        <input type="text" ref={this.setNewLastnameRef} defaultValue={this.state.lastname} />
                    }
                    {
                        (!this.state.editMode)&&
                        this.state.lastname
                    }
                </td>
                <td className="Client_balance">
                    {
                        (this.state.editMode)&&
                        <input type="text" ref={this.setNewBalanceRef} defaultValue={this.state.balance} />
                    }
                    {
                        (!this.state.editMode)&&
                        this.state.balance
                    }
                </td>
                <td className={"Client_status " + this.state.status}>{this.state.status}</td>
                <td className="Client_btns">
                    {
                        (this.state.editMode)&&
                        <>
                            <input type="button" name="save" value='save' onClick={this.save} />
                            <input type="button" name="close" value='close' onClick={this.close} />
                        </>   
                    }
                    {
                    (!this.state.editMode)&&                    
                    <input type="button" name="edit" value='edit' onClick={this.handleEditClick} />
                    }
                </td>
                <td>
                    <input type="button" name="delete" value='delete' onClick={this.delete} />
                </td>
            </tr>
        );
    }
}