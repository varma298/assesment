import { combineReducers, createStore } from "redux";
import employeeReducer from './employee';

const reducers = combineReducers({
employeeRedu : employeeReducer
})

const store = createStore(reducers);

export default store;