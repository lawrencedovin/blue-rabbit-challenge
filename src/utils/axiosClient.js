import axios from "axios";

export const client = axios.create({
    baseURL: "https://6308a96a722029d9ddd5005f.mockapi.io/api/users"
});