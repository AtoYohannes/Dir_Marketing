
// import authReducer from "./authReducer"
// import projectReducer from "./projectReducer"
import { combineReducers } from 'redux'
const { default: authReducer } = require("./authReducer");
const { default: jobReducer } = require("./jobReducer");


const rootReducer = combineReducers({
    auth: authReducer,
    job: jobReducer
});

export default rootReducer;