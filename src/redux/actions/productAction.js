import { ActionTypes } from "../contants/actionTypes";
export const setProduct=(products)=>{
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
