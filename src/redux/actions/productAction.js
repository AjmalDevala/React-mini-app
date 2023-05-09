import { ActionTypes } from "../contants/actionTypes";
export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        plyload : products,

    };
};
export const selectedProducts=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        plyload : product,

    };
};
