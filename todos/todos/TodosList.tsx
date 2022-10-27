import React, { FC } from 'react'
import styled from 'styled-components'

import TodoItem from './TodoItem'
import { UseTodosList } from './useTodosList'

type TodosListProps = {
  todosList: UseTodosList
}

const StyledUl = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  width: 80%;

  @media only screen and (min-width: 1200px) {
    margin-left: 25%;
    width: calc(50% - 16px);
  }
`

const TodosList: FC<TodosListProps> = (props): JSX.Element => {
  return (
    <StyledUl>
      {props.todosList.todosList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          toggleTodo={(e) => { props.todosList.toggleTodo(todoItem) }}
        />
      ))}
    </StyledUl>
  )
}

export default TodosList