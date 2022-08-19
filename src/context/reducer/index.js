import { combineReducers } from "redux"
import auth from "./auth"
import cart from "./addToCart"
import heart from "./addToHeart"

const rootReducer = combineReducers({
    auth, cart, heart
})

export default rootReducer