import { ChangeEvent, FormEvent, useState } from 'react'

import { UseTodosList } from './useTodosList'

export type UseTodoInput = {
  name: string
  nameChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  resetHandler: () => void
  submitHandler: (e: FormEvent) => void
}

const useTodoInput = (todosList: UseTodosList) => {
  const [name, setName] = useState<string>('')

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const resetHandler = (): void => {
    setName('')
  }

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault()
    todosList.addTodo({ completed: false, id: Math.random() * 9999, name })
    resetHandler()
  }

  return {
    name,
    nameChangeHandler,
    resetHandler,
    submitHandler
  }
}

export default useTodoInput