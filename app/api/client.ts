import { create } from 'apisauce'

const apiClient= create({
    baseURL: "http://192.168.80.138:9000/api"
})

export default apiClient;