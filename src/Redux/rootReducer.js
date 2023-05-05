import { combineReducers } from "redux";
import connectReducer from "./connection/reducer";
import getPairsReducer from "./pairs/reducer";
const rootReducer = combineReducers({
  connect: connectReducer,
  pairs: getPairsReducer
});

export default rootReducer;
