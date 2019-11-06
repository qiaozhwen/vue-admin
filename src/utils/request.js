import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API
})
export default service
