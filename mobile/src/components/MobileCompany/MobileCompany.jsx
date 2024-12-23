import React from "react";
import './MobileCompany.css';
import Client from "../Client/Client";
import clientsEvents from '../../events/clientsEvents.js';

export default class MobileCompany extends React.PureComponent{
    state = {
        clients: this.props.clients,
        clientsData: this.props.clients,

        filterMode: 'all'
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

    handleFilter = (e) => {
        this.setState({filterMode: e.target.value}, this.filter);
    }

    filter = () => {
        if (this.state.filterMode === 'all'){
            this.setState({clients: this.state.clientsData});
        }
    
        if (this.state.filterMode === 'active'){
            let clientsDataCopy = this.state.clientsData.filter(item => item.balance > 0);
            this.setState({clients: clientsDataCopy});
        }
    
        if (this.state.filterMode === 'blocked'){
            let clientsDataCopy = this.state.clientsData.filter(item => item.balance <= 0);
            this.setState({clients: clientsDataCopy});
        }
    }

    getMaxClientId(){
        let max = this.state.clientsData.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current;
        });

        return max.id;
    }

    create = () => {
        let newClient = {
            id: this.getMaxClientId()+1,
            firstname: '-',
            lastname: '-',
            balance: 0
        }

        let clientsDataCopy = [...this.state.clientsData];
        clientsDataCopy.push(newClient);

        this.setState({clients:clientsDataCopy, clientsData: clientsDataCopy});
    }

    edit = (model) => {
        let clientsDataCopy = [...this.state.clientsData];
        clientsDataCopy.forEach((client, index) => {
            if(client.id == model.id){
                clientsDataCopy[index] = model;
                this.setState({clients: clientsDataCopy, clientsData: clientsDataCopy}, () => clientsEvents.emit('close'));
            }
        });
    }

    delete = (id) => {
        let clientsDataCopy = this.state.clientsData.filter(item => item.id !=id);
        let clientsCopy = this.state.clients.filter(item => item.id !=id);
        this.setState({clients: clientsCopy, clientsData: clientsDataCopy});
    }

    render(){
        return(
            <div className="Mobile-company">
                <div className="Mobile-company__buttons">
                    <input type="button" value='all' onClick={this.handleFilter} />
                    <input type="button" value='active'  onClick={this.handleFilter} />
                    <input type="button" value='blocked'  onClick={this.handleFilter} />
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
                <input type="button" value='add a new client' onClick={this.create} />
            </div>
        );
    }
}