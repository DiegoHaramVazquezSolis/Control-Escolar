import firebase from './../../firebase';
import { getBimester } from './bimesterActions';
import { getCourse } from './courseActions';
import { getEvaluationState } from './evaluationActions';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

/*
 *Export const 
 */
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const ASPIRANT = "aspirant";
export const TEACHER = "teacher";

/**
 * @param {Firebase user} user 
 * @param {Dispatch} dispatch 
 */
function getProfile(user, dispatch) {
    const userRef = db.child("users").child(user.uid);
    return userRef.once("value", s => {
            dispatch(getBimester());
            dispatch(getCourse());
            dispatch(getEvaluationState());
            return dispatch(userLogginSuccess(s.val()));
    });
}

/**
 * @param {Firebase user} user 
 * @param {Personal data of user} info 
 * @param {Dispatch} dispatch 
 */
function createProfile(user, info, dispatch) {
    const userRef = db.child("users").child(user.uid);
    const profile = info;
    userRef.set(profile);
    return dispatch(userLogginSuccess(profile));
}


/**
 * @param {User email} email
 * @param {User password} password
 */
export const signInWithEmail = ({email, password}) => (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(email,password)
    .then(s => {
        localStorage.setItem("user", JSON.stringify(s));
        getProfile(s,dispatch);
    })
    .catch(e=>{
        console.log(e.message);
        toastr.error(e.message);
    });
}
/**
 * 
 * @param {Personal data of user} info
 * @param {Email for firebase user} email
 * @param {Password for firebase user} password
 */
export const signUpUser = ({info, email, password}) => (dispatch) => {
    return firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(s => {
        localStorage.setItem("user", JSON.stringify(s));
        toastr.success("Solicitud enviada con exito");
        alert("Accede a tu perfil, sera provisional por el momento, mas adelante cambiara");
        dispatch(createProfile(s, info ,dispatch));
    })
    .catch(e => {
        console.log(e);
        toastr.error(e.message);
    })
}

export const userChecker = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            dispatch(getProfile(user,dispatch));
        }
    })
}

export const logOut = () => (dispatch) => {
    localStorage.removeItem("user");
    firebase.auth().signOut();
    dispatch({type: LOGOUT_SUCCESS});
}


function userLogginSuccess(profile) {
    return {
        type: USER_LOGIN_SUCCESS,
        profile
    }
}