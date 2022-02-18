const INITIAL_STATE = {
    user:[],
    repos: [],
    errorMessage: ''
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_USER_SUCCESS' :
            return {...state, user: action.payload}
        case 'GET_USER_PUBLIC_REPOS' :
            return {...state, repos: action.payload}
        case 'GET_ERROR' :
            return {...state, errorMessage: action.payload}
        default: return state
    }
}
