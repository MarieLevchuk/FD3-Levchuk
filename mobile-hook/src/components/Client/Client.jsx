import React from "react";
import './Client.css';

import clientsEvents from '../../events/clientsEvents.js';

export default class Client extends React.PureComponent{
    state = {
        status: this.props.client.balance > 0 ? 'active' : 'blocked',

        editMode: false,
        createMode: false,
    }

    componentDidMount = () => {
        clientsEvents.addListener('close', this.close);
    };

    componentWillUnmount = () => {
        clientsEvents.removeListener('close', this.close);
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

    setNewBalance = () => {
        if(this.newBalanceRef){
            let balance=this.newBalanceRef.value;
            this.setState({status:balance > 0 ? 'active' : 'blocked'});
            return balance;
        };

        return this.props.client.balance;
    }

    save = () => {
        
        let client = {
            id: this.props.client.id,
            firstname: this.newFirstnameRef.value ?? this.props.client.firstname,
            lastname: this.newLastnameRef.value ?? this.props.client.lastname,
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
                        <input type="text" ref={this.setNewFirstnameRef} defaultValue={this.props.client.firstname} />
                    }
                    {
                        (!this.state.editMode)&&
                        this.props.client.firstname
                    }
                </td>
                <td className="Client_lastname">
                    {
                        (this.state.editMode)&&
                        <input type="text" ref={this.setNewLastnameRef} defaultValue={this.props.client.lastname} />
                    }
                    {
                        (!this.state.editMode)&&
                        this.props.client.lastname
                    }
                </td>
                <td className="Client_balance">
                    {
                        (this.state.editMode)&&
                        <input type="text" ref={this.setNewBalanceRef} defaultValue={this.props.client.balance} />
                    }
                    {
                        (!this.state.editMode)&&
                        this.props.client.balance
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