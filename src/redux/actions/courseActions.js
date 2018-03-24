import firebase from '../../firebase';

const db = firebase.database().ref("BP");

export const GET_COURSE_SUCCESS = "GET_COURSE_SUCCESS";

function getCourseSuccess(course) {
    return {
        type: GET_COURSE_SUCCESS,
        course
    };
}

export const getCourse = () => (dispatch) => {
    db.child("course").on("value", function(course){
        let courseVar = course.val().current;
        dispatch(getCourseSuccess(courseVar));
    });
}