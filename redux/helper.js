//import {createStore} from "./store";
// convert object to string and store in localStorage

export function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("covidStorage", serialisedState);
    } catch (e) {
        console.warn(e);
    }
 }
// load string from localStarage and convert into an Object
// invalid output must be undefined
export function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("covidStorage");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }

    // if (typeof window !== 'undefined') {
    //      // Perform localStorage action
    //     const item = localStorage.getItem('key')
    // }
}

//create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
//const store = createStore(rootReducer, loadFromLocalStorage());
// listen for store changes and use saveToLocalStorage to
// save them to localStorage
//store.subscribe(() => saveToLocalStorage(store.getState()));

//export default createStore (saveToLocalStorage, loadFromLocalStorage);