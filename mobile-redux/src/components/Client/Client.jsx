import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

import React, { useState } from 'react';

function Client({client}){
    const [editMode, setEditMode] = useState(false);

    const status = client.balance > 0 ? 'active' : 'blocked';    

    return (
        <TableRow id={client.id}>
            <TableCell>
                {
                    (editMode)&&
                    <TextField size="small" defaultValue={client.firstname}  />
                }
                {
                    (!editMode)&&
                    client.firstname
                }
            </TableCell>
            <TableCell>
                {
                    (editMode)&&
                    <TextField size="small" defaultValue={client.lastname}  />
                }
                {
                    (!editMode)&&
                    client.lastname
                }
            </TableCell>
            <TableCell>
                {
                    (editMode)&&
                    <TextField size="small" defaultValue={client.balance}  />
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
                        <IconButton aria-label="edit" size="small"  onClick={() => setEditMode(false)}>
                            <DoneIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="edit" size="small"  onClick={() => setEditMode(false)}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    </>
                }
                
            </TableCell>
            <TableCell>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default React.memo(Client);