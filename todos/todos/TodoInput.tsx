import React, { FC, MutableRefObject, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { UseTodoInput } from './useTodoInput'

type TodoInputProps = {
  todoInput: UseTodoInput
}

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  margin-left: 10%;
  width: 80%;

  input {
    border-radius: 4px;
    outline: none;
    padding: 4px 8px;
  }

  input[type=reset] {
    background-color: coral;
    border-color: coral;
    margin-left: 4px;
  }

  input[type=submit] {
    background-color: greenyellow;
    border-color: greenyellow;
    margin-left: 4px;
  }

  input[type=text] {
    width: calc(100% - 16px);
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 32px;

    input {
      padding: 8px 16px;
    }

    input[type=text] {
      width: calc(100% - 32px);
    }
  }
`

const TodoInput: FC<TodoInputProps> = (props): JSX.Element => {
  const inputRef = useRef()

  useEffect(() => {
    // focus
  })

  return (
    <StyledForm onReset={props.todoInput.resetHandler} onSubmit={props.todoInput.submitHandler}>
      <input
        ref={inputRef.current}
        id='todo'
        placeholder='New todo'
        value={props.todoInput.name}
        onChange={props.todoInput.nameChangeHandler}
      />
      <input type='reset' value='reset' />
      <input type='submit' value='submit' />
    </StyledForm>
  )
}

export default TodoInput