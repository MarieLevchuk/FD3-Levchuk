import React from "react";
import './Client.css';

export default class Client extends React.PureComponent{
    render(){
        console.log(`client ${this.props.client.id} render()`);
        
        return(
            <tr className="Client">
                <td className="Client_firstname">{this.props.client.firstname}</td>
                <td className="Client_lastname">{this.props.client.lastname}</td>
                <td className="Client_balance">{this.props.client.balance}</td>
                <td className="Client_status">{this.props.client.balance > 0 ? 'active' : 'blocked'}</td>
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