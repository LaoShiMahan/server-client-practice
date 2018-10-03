import {
    FETCH_MESSAGE
} from './types';

import axios from 'axios';

export function fetchMessage() {
    return function(dispatch) {
        axios.get("http://localhost:5000/")
            .then(res => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function signUp(fields) {
    return function(dispatch) {
        axios.post("http://localhost:5000/api/signup", {
            ...fields
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function signIn(fields) {
    return function(dispatch) {
        axios.post("http://localhost:5000/api/signin", {
            ...fields
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}