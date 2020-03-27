import { SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT, ADD_RESSOURCE } from "./action-types";
import axios from "axios";

const BASE_URl = "http://localhost:5000";

export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
}

export function incrementActionCount() {
    return {
        type: INCREMENT_ACTION_COUNT
    };
}

export function addRessource() {
    return {
        type: ADD_RESSOURCE
    };
}
//localstorage info connexion 
export function signinUser({ email, password }, history) {
    return function (dispatch) {
        axios.post(`${BASE_URl}/signin`, {
            email,
            password
        }).then((response) => {
            localStorage.setItem("token", response.data.token);
            dispatch(setAuthentification(true));
            history.push("/ressources")
        }).catch(error => {
            console.log(error)
        });
    }
}
//localstorage deconnexion
export function signoutUser(){
    return function(dispatch){
        dispatch(setAuthentification(false));
        //detruire le token
        localStorage.removeItem("token");
    }
}