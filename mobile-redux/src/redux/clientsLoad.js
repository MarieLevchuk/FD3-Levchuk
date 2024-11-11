import {updateLoadState, loadData} from "./clientsSlice.js";

export async function clientsLoad(dispatch) {
    try {
        dispatch (updateLoadState({ state: 1, error: null }));

        const response = await fetch("https://fe.it-academy.by/Examples/mobile_company.json");

        if(response.ok){
            const data = await response.json();
            dispatch(updateLoadState({ state: 2, error: null }));
            dispatch(loadData(data.clientsArr));
        } else {
            dispatch(updateLoadState({ state: 3, error: "HTTP error "+ response.status }));
        }
    } catch (error) {
        dispatch(updateLoadState({ state: 3, error: error.message}));
    }
}