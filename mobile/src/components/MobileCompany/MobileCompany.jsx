import React from "react";
import './MobileCompany.css';
import Client from "../Client/Client";
import clientsEvents from '../../events/clientsEvents.js';

export default class MobileCompany extends React.PureComponent{
    state = {
        clients: this.props.clients
    }

    componentDidMount = () => {
        clientsEvents.addListener('filter', this.filter);

        clientsEvents.addListener('edit', this.edit);
        clientsEvents.addListener('delete', this.delete);
    };

    componentWillUnmount = () => {
        clientsEvents.removeListener('filter', this.filter);

        clientsEvents.removeListener('edit', this.edit);
        clientsEvents.removeListener('delete', this.delete);
    };

    filter = (e) => {
        console.log(e.target.value);
    }

    edit = (id) => {
        console.log(id);
        
    }

    delete = (id) => {
        console.log('delete'+id);
    }

    render(){
        return(
            <div className="Mobile-company">
                <div className="Mobile-company__buttons">
                    <input type="button" value='all' onClick={this.filter} />
                    <input type="button" value='active'  onClick={this.filter} />
                    <input type="button" value='blocked'  onClick={this.filter} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>firstname</td>
                            <td>lastname</td>
                            <td>balance</td>
                            <td>status</td>
                            <td>edit</td>
                            <td>delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.clients.map(client => <Client key={client.id} client={client} />)
                        }
                    </tbody>
                </table>
                <input type="button" value='add new client' />
            </div>
        );
    }
}