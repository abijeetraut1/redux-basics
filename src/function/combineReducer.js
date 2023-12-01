import newcomments from "./comment/comment";
import login  from "./login/auth";
import { combineReducers } from "redux";


export default combineReducers({
    newcomments,
    login
})
