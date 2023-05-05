import { combineReducers } from "redux";

import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allproducts :productReducer,

});

export default reducers