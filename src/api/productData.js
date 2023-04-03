import Axios from "axios";

const API = Axios.create({
    baseURL:"http://localhost:3005"
});
export default API;