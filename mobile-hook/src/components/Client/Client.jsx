import { useRef, useState } from "react";
import './Client.css';
import React from "react";

import clientsEvents from "../../events/clientsEvents.js";

function Client(props){
    const [editMode, setEditMode] = useState(false);

    const status = props.client.balance > 0 ? 'active' : 'blocked';

    const firstnameRef = useRef(props.client.firstname);
    const lastnameRef = useRef(props.client.lastname);
    const balanceRef = useRef(props.client.balance);

    const handleDelete = (e) => {
        if(window.confirm('Delete client?')){
            clientsEvents.emit('delete', e.target.parentNode.parentNode.id);
        }        
    }
    const close = () => {
        setEditMode(false);     
    }

    function handleSave (){
        let client = {
            id: props.client.id,
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            balance: balanceRef.current.value
        };
        
        clientsEvents.emit('edit', client);
        close();    
    }

    console.log(`client ${props.client.id} render()`);

    return(
        <tr id={props.client.id} className="Client">
            <td className="Client_firstname">
                {
                    (editMode)&&
                    <input type="text" ref={firstnameRef} defaultValue={props.client.firstname} />
                }
                {
                    (!editMode)&&
                    props.client.firstname
                }
            </td>
            <td className="Client_lastname">
                {
                    (editMode)&&
                    <input type="text" ref={lastnameRef} defaultValue={props.client.lastname} />
                }
                {
                    (!editMode)&&
                    props.client.lastname
                }
            </td>
            <td className="Client_balance">
                {
                    (editMode)&&
                    <input type="text" ref={balanceRef} defaultValue={props.client.balance}   />
                }
                {
                    (!editMode)&&
                    props.client.balance
                }
            </td>
            <td className={"Client_status " + status}>{status}</td>
            <td className="Client_btns">
                {
                    (editMode)&&
                    <>
                        <input type="button" name="save" value='save' onClick={handleSave} />
                        <input type="button" name="close" value='close' onClick={close}/>
                    </>   
                }
                {
                    (!editMode)&&                    
                    <input type="button" name="edit" value='edit' onClick={() => setEditMode(true)}/>
                }
            </td>
            <td>
                <input type="button" name="delete" value='delete' onClick={handleDelete} />
            </td>
        </tr>
    );
}

export default React.memo(Client);