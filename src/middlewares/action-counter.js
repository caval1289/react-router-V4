import { incrementActionCount } from "../actions";
import {INCREMENT_ACTION_COUNT} from "../actions/action-types";

//3 function flécher pas besoin de return si c'est ecrit comme sa 
export const ActionCounter = (store) => (next) => (action) => {
            if (action.type !== INCREMENT_ACTION_COUNT){
                store.dispatch(incrementActionCount());
            }
            console.log("Action qui passe", action)
            next(action);
        };