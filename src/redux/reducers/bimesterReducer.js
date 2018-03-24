import {combineReducers} from 'redux';
import {GET_BIMESTER_SUCCESS} from "../actions/bimesterActions";

function bimester(state=[],action) {
    switch(action.type){
        case GET_BIMESTER_SUCCESS:
            return action.bimester;
        default:
            return state;
    }
}

export const bimesterReducer = combineReducers({
    bimester
});