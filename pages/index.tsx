import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import Footer from '@/todos/core/Footer'
import Header from '@/todos/core/Header'
import Main from '@/todos/core/Main'
import TodoInput from '@/todos/todos/TodoInput'
import TodosList from '@/todos/todos/TodosList'
import useTodoInput from '@/todos/todos/useTodoInput'
import useTodosList from '@/todos/todos/useTodosList'

const Home: NextPage = () => {
  const todosList = useTodosList()
  const todoInput = useTodoInput(todosList)

  return (
    <>
      <Head>
        <title>TODOS</title>
      </Head>
      <Header />
      <Main>
        <TodoInput todoInput={todoInput} />
        <TodosList todosList={todosList} />
      </Main>
      <Footer />
    </>
  )
}

export default Home
