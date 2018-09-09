const INIT_STATE = {
    logedIn: false
}

const Loggedin = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return { ...state, logedIn: action.payload }
        default:
            return state
    }
}

export default Loggedin