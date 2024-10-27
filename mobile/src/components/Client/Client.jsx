import React from "react";
import './Client.css';

import clientsEvents from '../../events/clientsEvents.js';

export default class Client extends React.PureComponent{

    edit = (e) => {
        clientsEvents.emit('edit', e.target.parentNode.parentNode.id);
    }

    delete = (e) => {
        clientsEvents.emit('delete', e.target.parentNode.parentNode.id);
    }

    render(){
        console.log(`client ${this.props.client.id} render()`);

        const status = this.props.client.balance > 0 ? 'active' : 'blocked';
        
        return(
            <tr id={this.props.client.id} className="Client">
                <td className="Client_firstname">{this.props.client.firstname}</td>
                <td className="Client_lastname">{this.props.client.lastname}</td>
                <td className="Client_balance">{this.props.client.balance}</td>
                <td className={"Client_status " + status}>{status}</td>
                <td>
                    <input type="button" name="edit" value='edit' onClick={this.edit} />
                </td>
                <td>
                    <input type="button" name="delete" value='delete' onClick={this.delete} />
                </td>
            </tr>
        );
    }
}