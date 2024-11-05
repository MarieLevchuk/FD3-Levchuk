import { createSlice } from "@reduxjs/toolkit";
import clientsData from '../clients.json';

const initialState = {
    clients: clientsData
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        clientCreate: (state, action) => {
            state.clients += action.payload;
        },
        clientEdit: (state, action) => {
            state.clients = state.clients.map(client => client.id == action.payload.id ? action.payload : client);
        },
        clientDelete: (state, action) => {
            state.clients = state.clients.filter(client => client.id != action.payload.id);
        },
        clientFilter: (state, action) => {
            switch(action.payload){
                case 'active':
                    console.log('filtered active');
                    
                    break;
                case 'blocked':
                    console.log('filtered blocked');
                    break;
                default:
                    console.log('filtered all');
                    break;
            }
        },
        
    }
});

export const { clientCreate, clientEdit, clientDelete } = clientsSlice.actions;

export default clientsSlice.reducer;