import axios from "axios";

export default axios.create({
    baseURL:'https://d9c2-203-192-251-188.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning":"true"}
});