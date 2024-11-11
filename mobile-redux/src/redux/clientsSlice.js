import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
    dataLoadError: null,

    clients: [],
    filteredClients: []
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        updateLoadState: (state, action) => {
            state.dataLoadState = action.payload.state;
            state.dataLoadError = action.payload.error;
        },
        loadData: (state, action) => {
            state.clients = action.payload;
            state.filteredClients = state.clients;
        },


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

export const {updateLoadState, loadData, clientCreate, clientEdit, clientDelete, clientsFilter } = clientsSlice.actions;

export default clientsSlice.reducer;