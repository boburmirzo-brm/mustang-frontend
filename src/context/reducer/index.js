import { combineReducers } from "redux"
import auth from "./auth"
import cart from "./addToCart"
import heart from "./addToHeart"
import filterShow from "./filterShow"

const rootReducer = combineReducers({
    auth, cart, heart, filterShow
})

export default rootReducer