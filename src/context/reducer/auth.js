import {SIGN_OUT, SIGN_IN} from "../action/actionTypes"

const auth = (state=null, action)=>{
    switch(action.type){
        case SIGN_IN:
            return state = action.payload 
        case SIGN_OUT:
            return state = null
        default:
            return state
    }
}
export default auth;