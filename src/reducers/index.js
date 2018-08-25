import { combineReducers } from "redux"
import langReducer from './languageReducer'
import AdminReducer from "./AdminReducer"
import isLoggedin from "./isLoggedIn"
const rootReducer = combineReducers({
    langReducer,
    AdminReducer,
    isLoggedin
})

export default rootReducer