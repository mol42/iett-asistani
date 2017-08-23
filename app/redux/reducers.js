import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { iettReducer } from "./iett/reducer";

export default combineReducers({
  form: formReducer,
  iett : iettReducer
});
