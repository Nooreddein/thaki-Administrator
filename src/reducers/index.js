import { combineReducers } from "redux"
import langReducer from './languageReducer'
import AdminReducer from "./AdminReducer"
import Loggedin from "./isLoggedIn"
import catReducer from "./catReducer"
const rootReducer = combineReducers({
    langReducer,
    AdminReducer,
    Loggedin,
    catReducer
})

export default rootReducer