import { combineReducers } from "redux";

import house from "./house/house.reducer";

const rootReducer = combineReducers({
  house: house,
});

export default rootReducer;
