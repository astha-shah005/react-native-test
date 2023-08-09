import axios from 'axios';

const baseUrl = 'https://api.realworld.io/api'

export default ()=>{
    return axios.create({
        baseURL: baseUrl
    })
}