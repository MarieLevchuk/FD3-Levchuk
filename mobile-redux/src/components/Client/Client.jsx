import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

import React, { useRef, useState } from 'react';
import clientsEvents from '../../events/clientsEvents';

function Client({client}){
    const [editMode, setEditMode] = useState(false);

    const status = client.balance > 0 ? 'active' : 'blocked';   
    
    const imRef = useRef(client.im);
    const famRef = useRef(client.fam);
    const balanceRef = useRef(client.balance);

    const close = () => {
        setEditMode(false);     
    }

    function handleSave (){
        let editedClient = {
            id: client.id,
            im: imRef.current.value,
            fam: famRef.current.value,
            balance: balanceRef.current.value
        };        

        clientsEvents.emit('edit', editedClient);
        close();    
    }

    function handleDelete(){
        if(window.confirm('Delete client?')){
            clientsEvents.emit('remove', client.id);
        }        
    }

    console.log(`client ${client.id} render()`);

    return (
        <TableRow id={client.id}>
            <TableCell>
                {
                    (editMode)&&
                    <TextField size="small" inputRef={imRef} defaultValue={client.im}  />
                }
                {
                    (!editMode)&&
                    client.im
                }
            </TableCell>
            <TableCell>
                {
                    (editMode)&&
                    <TextField size="small" inputRef={famRef} defaultValue={client.fam}  />
                }
                {
                    (!editMode)&&
                    client.fam
                }
            </TableCell>
            <TableCell>
                {
                    (editMode)&&
                    <TextField size="small" inputRef={balanceRef} defaultValue={client.balance}  />
                }
                {
                    (!editMode)&&
                    client.balance
                }
            </TableCell>
            <TableCell style={{backgroundColor: status === 'blocked' ? '#cd9696' : '#86c386'}}>{status}</TableCell>
            <TableCell>
                {
                    (!editMode)&&
                    <IconButton aria-label="edit" size="small"  onClick={() => setEditMode(true)}>
                        <EditIcon fontSize="inherit" />
                    </IconButton>
                }
                {
                    (editMode)&&
                    <>
                        <IconButton aria-label="edit" size="small"  onClick={handleSave}>
                            <DoneIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="edit" size="small"  onClick={close}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    </>
                }
                
            </TableCell>
            <TableCell>
                <IconButton aria-label="delete" size="small"  onClick={handleDelete}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default React.memo(Client);