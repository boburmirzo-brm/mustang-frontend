import {FILTER_SHOW} from "../action/actionTypes"
const filterShow = (state=false, action)=>{
    switch(action.type){
        case FILTER_SHOW:
            return state = !state
        default:
            return state
    }
}
export default filterShow