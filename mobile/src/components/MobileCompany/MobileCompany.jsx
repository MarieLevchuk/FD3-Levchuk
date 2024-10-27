import React from "react";
import './MobileCompany.css';
import Client from "../Client/Client";

export default class MobileCompany extends React.PureComponent{
    state = {
        clients: this.props.clients
    }

    render(){
        return(
            <div className="Mobile-company">
                <div className="Mobile-company__buttons">
                    <input type="button" value='all' />
                    <input type="button" value='active' />
                    <input type="button" value='blocked' />
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