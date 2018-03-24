import { combineReducers } from "redux";
import { bimesterReducer } from "./bimesterReducer";
import { evaluationReducer } from "./evaluationReducer";
import { userReducer } from "./userReducer";
import { courseReducer } from "./courseReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    bimester: bimesterReducer,
    evaluationState: evaluationReducer,
    course: courseReducer
});