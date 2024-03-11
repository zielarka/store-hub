    import axios from "axios";

    export default axios.create({
        baseURL: 'https://api.rawg.io/api/',
        params: {
            key: '6a5ad884f39e4850aee51d0e92a67586' 
        }
    })