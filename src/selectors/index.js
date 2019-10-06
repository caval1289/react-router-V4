//npm install --save reselect lodash librérie
import { createSelector } from 'reselect';
import lodash from "lodash";

// sous forme de fonction "liste des entiers dans ressources" 
export function getIntegerList(state) {
    return state.ressource.ressourceList;
}
//sous forme de const (même chose) "liste des contiennent 1 dans ressources" 
export const getContainsOneList = state => {
    return getIntegerList(state).filter(
        r => r.toString().indexOf("1") > -1
    )
}

// liste des Entiers premiers
export const getPrimeNumberList = state => {
    return getIntegerList(state).filter(r => isPrimeNumber(r));
}
//function pour choisire le nombre premiers
function isPrimeNumber(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false
        }
    }
    return value > 1;
}

// lsite Entiers premiers contenants "1" on mixe nos 2 liste 
export const getSpecialNumberList = createSelector(
    getContainsOneList,
    getPrimeNumberList,
    (containsOneList, primeNumersList) => {
        return lodash.intersection(containsOneList, primeNumersList);
    }
)