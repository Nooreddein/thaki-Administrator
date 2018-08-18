


export const languageChanged = (lang) =>{
    return {
        type:"LANG_CHANGED",
        payload:lang
    }
}



export const isLogedIn = (data) => {
    return {
        type:"LOGGED_IN",
        payload:data
    }
}