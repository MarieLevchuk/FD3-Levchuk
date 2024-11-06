import {default as Client} from "../Client/Client";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientCreate, clientEdit, clientDelete, clientsFilter } from "../../redux/clientsSlice";

export default function MobileCompany(){

    const clientsData = useSelector(state => state.clients);
    // const clients = useSelector(state => state.filteredClients);
    const dispatch = useDispatch();

    // console.log(clientsData);
    // console.log(clients);
    

    const [filterMode, setFilterMode] = useState('all');
    // const [clients, setClients] = useState([]);

    // useEffect(()=>{
    //     setClients(clientsData.clients);
    // }, [clientsData]);

    // useEffect(()=>{
    //     if (filterMode === 'all'){
    //         setClients(clientsData.clients);
    //     }

    //     if (filterMode === 'active'){
    //         setClients(clientsData.clients.filter(item => item.balance > 0));
    //     }

    //     if (filterMode === 'blocked'){
    //         setClients(clientsData.clients.filter(item => item.balance <= 0));
    //     }
    // }, [filterMode]);
    // debugger;
    const memoizedClients = useMemo(()=>{
        return clientsData.filteredClients.map(client => <Client key={client.id} client={client} />)
    }, [clientsData.filteredClients]);

    function getMaxClientId(){
        let max = clientsData.clients.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current;
        });

        return max.id;
    }

    function create() {
        let newClient = {
            id: getMaxClientId()+1,
            firstname: '-',
            lastname: '-',
            balance: 0
        };

        dispatch( clientCreate(newClient) );
    }

    function filter(e) {
        dispatch( clientsFilter(e.target.value) );
    }
    

    return (
        <div className="Mobile-company">
            <div className="Mobile-company__buttons">
                <Button variant="contained" size="small" value="all" onClick={filter}>All</Button>
                <Button variant="contained" size="small" value="active" onClick={filter}>Active</Button>
                <Button variant="contained" size="small" value="blocked" onClick={filter}>Blocked</Button>
                {/* <Button variant="contained" size="small" value="all" onClick={(e) => setFilterMode(e.target.value)}>All</Button>
                <Button variant="contained" size="small" value="active" onClick={(e) => setFilterMode(e.target.value)}>Active</Button>
                <Button variant="contained" size="small" value="blocked" onClick={(e) => setFilterMode(e.target.value)}>Blocked</Button> */}
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>firstname</TableCell>
                        <TableCell>lastname</TableCell>
                        <TableCell>balance</TableCell>
                        <TableCell>status</TableCell>
                        <TableCell>edit</TableCell>
                        <TableCell>delete</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* { clientsData.clients.map(client => <Client key={client.id} client={client} />) } */}
                        { memoizedClients }
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" size="small" value="create" onClick={create}>add a new client</Button>
        </div>
    );
}