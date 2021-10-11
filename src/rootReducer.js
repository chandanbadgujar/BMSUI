import { combineReducers } from "redux";
import RegisterReducer from "./Reducers/RegisterReducer";

const rootReducer = combineReducers({
    register: RegisterReducer  
});

export default rootReducer;