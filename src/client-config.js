import axios from "axios";
const baseUrl = "http://localhost:3060"
// const baseUrl = "https://server.dokwon.world/api"
const token = sessionStorage.getItem("token");
const instance = axios.create({
    baseURL:baseUrl,
    headers: { authorization: token },
})

export default instance;