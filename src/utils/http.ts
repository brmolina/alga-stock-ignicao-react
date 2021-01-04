import axios from 'axios'

const http = axios.create({
    baseURL: 'https://localhost:3024'
})

export default http