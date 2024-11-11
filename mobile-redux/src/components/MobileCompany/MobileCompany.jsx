import {default as Client} from "../Client/Client";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientCreate, clientEdit, clientDelete, clientsFilter } from "../../redux/clientsSlice";
import clientsEvents from "../../events/clientsEvents";
import { clientsLoad } from "../../redux/clientsLoad";

export default function MobileCompany(){

    const clientsData = useSelector(state => state.clients);
    const dispatch = useDispatch();   
    
    function loadData() {
        dispatch(clientsLoad);
    }   

    useEffect(() => {
        loadData();

        clientsEvents.addListener('remove', remove);
        clientsEvents.addListener('edit', edit);
        return () => {
            clientsEvents.removeListener('remove', remove);
            clientsEvents.removeListener('edit', edit);
        }
    }, []);
    
    const memoizedClients = useMemo(()=>{
        return clientsData.filteredClients.map(client => <Client key={client.id} client={client} />)
    }, [clientsData.filteredClients]);

    function getMaxClientId(){
        if(clientsData.clients.length == 0){
            return 0;
        }

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

    function edit(model) {
        dispatch( clientEdit(model) );
    }

    function remove(id) {
        dispatch( clientDelete(id) );
    }

    function filter(e) {
        dispatch( clientsFilter(e.target.value) );
    }
    
    // render
    if(clientsData.dataLoadState===0){
        return <>no data</>
    }
    
    if(clientsData.dataLoadState===1){
        return <>loading...</>
    }
    if(clientsData.dataLoadState===3){
        return <>error: {clientsData.dataLoadError}</>
    }

    return (
        <div className="Mobile-company">
            <div className="Mobile-company__buttons">
                <Button variant="contained" size="small" value="all" onClick={filter}>All</Button>
                <Button variant="contained" size="small" value="active" onClick={filter}>Active</Button>
                <Button variant="contained" size="small" value="blocked" onClick={filter}>Blocked</Button>
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
                        { memoizedClients }
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" size="small" value="create" onClick={create}>add a new client</Button>
        </div>
    );

}