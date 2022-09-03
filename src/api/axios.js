import axios from "axios"
const mainURL = axios.create({
    baseURL: "https://mustang-backend.herokuapp.com"
})
export default mainURL