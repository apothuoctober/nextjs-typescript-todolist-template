import Image from 'next/image'
import React, { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'

import Todo from './Todo'

type TodoItemProps = {
  todoItem: Todo
  toggleTodo: MouseEventHandler<HTMLButtonElement>
}

type StyledLiProps = {
  completed: boolean
}

const StyledLi = styled.li<StyledLiProps>`
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.15);
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 4px;
  width: calc(100% - 8px);
  
  @media only screen and (min-width: 1200px) {
    margin-bottom: 8px;
    max-width: 360px;
    padding: 8px;
    width: calc(100% - 16px);
  }

  button {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: large;
    font-weight: bold;
    justify-content: center;
  }

  ${({ completed }) => completed ? `
  background-color: green;
  color: white;
  opacity: 0.6;
  text-decoration: line-through;
  ` : `
  background-color: aliceblue;
  `}
`

const TodoItem: FC<TodoItemProps> = (props): JSX.Element => {
  return (
    <StyledLi completed={props.todoItem.completed}>
      <span>{props.todoItem.name}</span>
      <button id={props.todoItem.completed ? 'reactivateTodo' : 'completeTodo'} onClick={props.toggleTodo}>
        <Image alt='application logo' height={24} layout='fixed' src={props.todoItem.completed ? '/checkbox-marked-256x256.png' : '/checkbox-empty-256x256.png'} width={24} />
      </button>
    </StyledLi>
  )
}

export default TodoItem