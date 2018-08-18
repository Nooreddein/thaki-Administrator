import { combineReducers } from "redux"
import langReducer from './languageReducer'
import AdminReducer from "./AdminReducer"
const rootReducer = combineReducers({
    langReducer,
    AdminReducer
})

export default rootReducer