import { combineReducers } from "redux"
import langReducer from './languageReducer'
import AdminReducer from "./AdminReducer"
import Loggedin from "./isLoggedIn"
const rootReducer = combineReducers({
    langReducer,
    AdminReducer,
    Loggedin
})

export default rootReducer