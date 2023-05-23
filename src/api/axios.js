import axios from "axios"
const mainURL = axios.create({
    // baseURL: "http://localhost:8000/"
    // baseURL: "https://mustang-backend-ofhc-main-h4nwdglgda-wm.a.run.app/"
    baseURL: "https://mustang-backend.onrender.com/"
})
export default mainURL