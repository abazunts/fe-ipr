import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import historyReducer from "./historyReducer";


const reducers = combineReducers({
    historyPage: historyReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;