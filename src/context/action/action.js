import {SIGN_IN, SIGN_OUT, ADD_TO_CART, ADD_TO_HEART} from "./actionTypes"

export const signIn = (payload)=>{
    return {
        type: SIGN_IN,
        payload
    }
}

export const signOut = ()=>{
    return {
        type: SIGN_OUT
    }
}

export const removeFromCart = (data)=>{
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const removeFromHeart = (data)=>{
    return {
        type: ADD_TO_HEART,
        payload: data
    }
}

