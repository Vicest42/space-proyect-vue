import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.le-systeme-solaire.net/rest/bodies',
})

export default api