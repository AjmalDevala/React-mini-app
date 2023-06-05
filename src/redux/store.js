import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./sample";

export const store = configureStore({
    reducer :{
        sample:sampleReducer,
    },
}) 