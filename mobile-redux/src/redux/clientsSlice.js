import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
    dataLoadError: null,

    clients: [],
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
        },


        clientCreate: (state, action) => {
            state.clients.push(action.payload);
        },
        clientEdit: (state, action) => {
            state.clients = state.clients.map(client => client.id == action.payload.id ? action.payload : client);
        },
        clientDelete: (state, action) => {
            state.clients = state.clients.filter(client => client.id != action.payload);
        },        
    }
});

export const {updateLoadState, loadData, clientCreate, clientEdit, clientDelete } = clientsSlice.actions;

export default clientsSlice.reducer;