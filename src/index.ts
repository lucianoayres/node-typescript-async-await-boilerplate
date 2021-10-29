import axios from 'axios'

interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function apiGetTodo(): Promise<ITodo> {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  )
  const data = await response.data
  return data
}

const response = await apiGetTodo()

console.log(response)
