import {SIGN_IN} from "../action/actionTypes"

const auth = (state=null, action)=>{
    switch(action.type){
        case SIGN_IN:
            return state = action.payload
        default:
            return state
    }
}
export default auth