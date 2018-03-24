import firebase from './../../firebase';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

export const GET_EVALUATION_SUCCESS = "GET_EVALUATION_SUCCESS";

function getEvaluationSuccess(evaluationState) {
    return {
        type: GET_EVALUATION_SUCCESS,
        evaluationState
    };
}

export const getEvaluationState = () => (dispatch) => {
    db.child("evaluation").on("value", function(currentEvaluationState){
        let currentState = currentEvaluationState.val().state;
        dispatch(getEvaluationSuccess(currentState));
    });
}

export const setEvaluationState = (newState) => (dispatch) => {
    db.child("evaluation").update({
        state: newState
    });
    if(newState){
        toastr.success("Evaluacion iniciada");
    }else{
        toastr.info("Evaluacion terminada");
    }
}