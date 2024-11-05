import { useEffect, useMemo, useState } from "react";
import {default as Client} from "../Client/Client.jsx";
import './MobileCompany.css';
import clientsEvents from "../../events/clientsEvents.js";


export default function MobileCompany({initclients}){

    const [clientsData, setClientsData] = useState(initclients);
    const [clients, setClients] = useState([]);
    const [filterMode, setFilterMode] = useState("all");
    
    useEffect(() => {
        clientsEvents.addListener('delete', deleteClient);
        clientsEvents.addListener('edit', editClient);
        return () => {
            clientsEvents.removeListener('delete', deleteClient);
            clientsEvents.removeListener('edit', editClient);
        }
    }, []);
    
    useEffect(()=>{
        if (filterMode === 'all'){
            setClients(clientsData);
        }

        if (filterMode === 'active'){
            setClients(clientsData.filter(item => item.balance > 0));
        }

        if (filterMode === 'blocked'){
            setClients(clientsData.filter(item => item.balance <= 0));
        }
    }, [filterMode]);

    useEffect(()=>{
        setClients(clientsData);
    }, [clientsData]);

    const memoizedClients = useMemo(()=>{
        return clients.map(client => <Client key={client.id} client={client} />)
    }, [clients]);
    

    function getMaxClientId(){
        let max = clientsData.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current;
        });

        return max.id;
    }

    const createClient = () => {
        let newClient = {
            id: getMaxClientId()+1,
            firstname: '-',
            lastname: '-',
            balance: 0
        };

        setClientsData(prev => [...prev, newClient]);
    };

    const editClient = (model) => {
        setClientsData(prev => prev.map(client => client.id == model.id ? {...model} : client));
    };

    const deleteClient = (id) => {       
        setClientsData(prev => prev.filter(item => item.id !=id));
    }

    return(
        <div className="Mobile-company">
            <div className="Mobile-company__buttons">
                    <input type="button" value='all' onClick={(e) => setFilterMode(e.target.value)} />
                    <input type="button" value='active' onClick={(e) => setFilterMode(e.target.value)} />
                    <input type="button" value='blocked' onClick={(e) => setFilterMode(e.target.value)} />
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
                        { memoizedClients }
                    </tbody>
                </table>
                <input type="button" value='add a new client' onClick={createClient} />
        </div>
    );
}