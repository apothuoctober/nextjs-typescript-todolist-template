import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type MainProps = {
  children: ReactNode
}

const StyledMain = styled.main`
  margin-top: 8px;
  padding: 8px;
  text-align: center;
  width: calc(100% - 16px);
  
  @media only screen and (min-width: 1200px) {
    margin-top: 16px;
    padding: 16px;
    width: calc(100% - 32px);
  }
`

const Main: FC<MainProps> = (props): JSX.Element => {
  return (
    <StyledMain>
      {props.children}
    </StyledMain>
  )
}

export default Main