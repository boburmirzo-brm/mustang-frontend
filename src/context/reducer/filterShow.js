import {FILTER_SHOW, FILTER_HIDE} from "../action/actionTypes"
const filterShow = (state=false, action)=>{
    switch(action.type){
        case FILTER_SHOW:
            return state = !state
        case FILTER_HIDE:
            return state = false
        default:
            return state
    }
}
export default filterShow