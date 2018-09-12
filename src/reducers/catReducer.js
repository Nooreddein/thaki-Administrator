


const INIT_STATE = {
    cat: ''
}


const catReducer = (state = INIT_STATE, action) => {
    switch (action.payload) {
        case 'CAT_SELECTED':
            return { ...state, cat: action.payload }
        default:
            return state
    }
}

export default catReducer