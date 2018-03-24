import {combineReducers} from 'redux';
import {GET_EVALUATION_SUCCESS} from './../actions/evaluationActions';

function evaluation(state=[],action) {
    switch(action.type){
        case GET_EVALUATION_SUCCESS:
            return action.evaluationState;
        default:
            return state;
    }
}

export const evaluationReducer = combineReducers({
    evaluation
});