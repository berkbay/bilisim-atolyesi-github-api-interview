import axios from "axios";

export const getUser = (username) => dispacth =>{
    axios.get(`https://api.github.com/users/${username}`)
        .then((res) => {
            dispacth({type: 'GET_USER_SUCCESS', payload: res.data})
        })
        .catch(error => {
            dispacth({type: 'GET_ERROR', payload: error.response.data.message})
        })
}

export const getRepos = (username) => dispatch => {
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(res => dispatch({type: 'GET_USER_PUBLIC_REPOS', payload: res.data}))
        .catch(error => dispatch({type: 'GET_ERROR', payload: error}))
}
