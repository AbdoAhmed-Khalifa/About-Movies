import axios from "axios";

const configAxios = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    params: {
        api_key: "886913db05826ee2f72691737c1b0fe9",
        page: 1
    }
})

export default configAxios;