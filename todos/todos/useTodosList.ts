import { useState } from 'react'

import Todo from './Todo'

export type UseTodosList = {
  addTodo: (todo: Todo) => void
  removeTodo: (todo: Todo) => void
  todosList: Todo[]
  toggleTodo: (todo: Todo) => void
}

const useTodosList = (): UseTodosList => {
  const [todosList, setTodosList] = useState<Todo[]>([])

  const addTodo = (todo: Todo): void => {
    setTodosList([...todosList, todo])
  }

  const removeTodo = (todo: Todo): void => {
    const todoIndex = todosList.indexOf(todo)
    const todosListCopy = [...todosList].splice(todoIndex, 1)
    setTodosList(todosListCopy)
  }

  const toggleTodo = (todo: Todo): void => {
    const todoIndex = todosList.indexOf(todo)
    const todosListCopy = [...todosList]
    todosListCopy[todoIndex].completed = !todosListCopy[todoIndex].completed
    setTodosList(todosListCopy)
  }

  return {
    addTodo,
    removeTodo,
    todosList,
    toggleTodo
  }
}

export default useTodosList