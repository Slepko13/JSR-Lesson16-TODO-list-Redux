import { createStore, combineReducers } from 'redux';
import todoReducer from './todoReducer';


let reducers = combineReducers({
    todo: todoReducer
})

let store = createStore(reducers);
window.store = store;
export default store;