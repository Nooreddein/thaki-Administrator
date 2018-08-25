const INIT_STATE = {
    logedIn: false
}

const isLoggedin = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADMIN_LOGED_IN":
            return { ...state, logedIn: action.payload }
        default:
            return state
    }
}

export default isLoggedin