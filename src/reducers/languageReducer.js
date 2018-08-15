const INIT_STATE = {
    lang: "en"
}

const langReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LANG_CHANGED":
            return { ...state, lang: action.payload }
        default:
            return state
    }
}

export default langReducer