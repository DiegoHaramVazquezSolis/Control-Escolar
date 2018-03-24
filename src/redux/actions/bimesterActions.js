import firebase from '../../firebase';

const db = firebase.database().ref("BP");

export const GET_BIMESTER_SUCCESS = "GET_BIMESTER_SUCESS";

function getBimesterSuccess(bimester) {
    return {
        type: GET_BIMESTER_SUCCESS,
        bimester
    };
}

export const getBimester = () => (dispatch) => {
    db.child("bimester").on("value", function (snapshot){
        let bimester = snapshot.val().current;
        dispatch(getBimesterSuccess(bimester));
    });
}