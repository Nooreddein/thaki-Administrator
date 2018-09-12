


export const languageChanged = (lang) => {
    return {
        type: "LANG_CHANGED",
        payload: lang
    }
}



export const isLogedIn = (data) => {
    return {
        type: "LOGGED_IN",
        payload: data
    }
}


export const AdminLoggedIn = (data) => {
    return {
        type: "ADMIN_LOGED_IN",
        payload: data
    }
}

export const catSelected = (cat) => {
    return {
        type: "CAT_SELECTED",
        payload: cat
    }
}