import { apiGetPosts } from './api.js'

const response = await apiGetPosts()

console.log(response)
