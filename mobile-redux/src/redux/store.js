import {configureStore} from '@reduxjs/toolkit';
import clientsReducer from './clientsSlice.js' ;

const store = configureStore({
    reducer: {
        clients: clientsReducer
    }
});

export default store;