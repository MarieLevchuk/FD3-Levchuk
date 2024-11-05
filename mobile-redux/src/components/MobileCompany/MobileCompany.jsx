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

export default function MobileCompany({initclients}){
    const [clientsData, setClientsData] = useState(initclients);
    const [clients, setClients] = useState(initclients);

    useEffect(()=>{
        setClients(clientsData);
    }, [clientsData]);

    const memoizedClients = useMemo(()=>{
        return clients.map(client => <Client key={client.id} client={client} />)
    }, [clients]);
 

    return (
        <div className="Mobile-company">
            <div className="Mobile-company__buttons">
                <Button variant="contained" size="small" value="all" onClick={(e) => console.log(e.target.value)}>All</Button>
                <Button variant="contained" size="small" value="active" onClick={(e) => console.log(e.target.value)}>Active</Button>
                <Button variant="contained" size="small" value="blocked" onClick={(e) => console.log(e.target.value)}>Blocked</Button>
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
                        {/* { initclients.map(client => <Client key={client.id} client={client} />) } */}
                        { memoizedClients }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}