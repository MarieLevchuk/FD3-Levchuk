import { createSlice } from "@reduxjs/toolkit";
import clientsData from '../clients.json';

const initialState = {
    clients: clientsData,
    filteredClients: clientsData
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        clientCreate: (state, action) => {
            state.clients.push(action.payload);
            state.filteredClients = state.clients;
        },
        clientEdit: (state, action) => {
            state.clients = state.clients.map(client => client.id == action.payload.id ? action.payload : client);
            state.filteredClients = state.clients;
        },
        clientDelete: (state, action) => {
            state.clients = state.clients.filter(client => client.id != action.payload);
            state.filteredClients = state.clients;
        },
        clientsFilter: (state, action) => {
            switch(action.payload){
                case 'active':
                    state.filteredClients = state.clients.filter(item => item.balance > 0);
                    break;
                case 'blocked':
                    state.filteredClients = state.clients.filter(item => item.balance <= 0);
                    break;
                case 'all':
                default:
                    state.filteredClients = state.clients;
                    break;
            }
        },
        
    }
});

export const { clientCreate, clientEdit, clientDelete, clientsFilter } = clientsSlice.actions;

export default clientsSlice.reducer;