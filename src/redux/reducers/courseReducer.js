import {combineReducers} from 'redux';
import {GET_COURSE_SUCCESS} from "../actions/courseActions";

function course(state=[], action) {
    switch(action.type){
        case GET_COURSE_SUCCESS:
            return action.course;
        default:
            return state;
    }
}

export const courseReducer = combineReducers({
    course
});