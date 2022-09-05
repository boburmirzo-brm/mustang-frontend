import axios from "axios"
const mainURL = axios.create({
    baseURL: "http://localhost:8000/"
    // baseURL: "https://mustang-backend.herokuapp.com"
})
export default mainURL