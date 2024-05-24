import axios from "axios";

export const ApiExecute = (url, method = 'GET', params = {}) => {

    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
    }

    let instance = axios.create({
        baseURL: '/',
        timeout: 10 * 1000,
        headers,
    });

    let data = params?.data ?? {};

    return instance({
        url,
        method,
        data
    })

}