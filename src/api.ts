import axios from 'axios'

const API_INSTANCE = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 3000,
  responseType: 'json'
})

interface IPost {
  id: number
  title: string
  author: string
}

export async function apiGetPosts(): Promise<IPost[]> {
  const response = await API_INSTANCE(`posts`)
  const data = await response.data
  return data
}
