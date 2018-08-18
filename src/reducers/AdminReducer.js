const INIT_STATE = {
    data: {}
}

const AdminReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return { ...state, data: action.payload }
        default:
            return state
    }
}

export default AdminReducer