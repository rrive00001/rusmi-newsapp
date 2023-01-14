/* import { createStore } from "redux";
import rootReducer from "./reducer/index";

const store = createStore(rootReducer);

export default store; */

import { createStore } from "redux";
import rootReducer from "./reducer/index";
import { saveToLocalStorage, loadFromLocalStorage } from "./helper";


//const store = createStore(rootReducer);

//create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(rootReducer, loadFromLocalStorage());
// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;

