import axios from 'axios'
import env from '../../.env.js'

export class ApiProvider {
    
    constructor(host = env.GATEWAY){
        this.host = host
    }
    get (path, params) {
        return axios.get(`${this.host}${path}`, params)
    }
    post (path, data, config) {
        return axios.post(`${this.host}${path}`, data, config)
    }
    patch (path, data, config) {
        return axios.patch(`${this.host}${path}`, data, config)
    }
    remove (path, params) {
        return axios.delete(`${this.host}${path}`, params)
    }

}