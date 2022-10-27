import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-top: 16px;
  padding: 8px;
  text-align: center;
  width: calc(100% - 16px);
  
  @media only screen and (min-width: 1200px) {
    margin-top: 32px;
    padding: 16px;
    width: calc(100% - 32px);
  }

  p {
    color: firebrick;
    font-size: small;
    font-style: italic;
    font-weight: 200;
  }
`

const Footer: FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <p>A todos list application template developed by <Link href=''>adrianpothuaud</Link>.</p>
    </StyledFooter>
  )
}

export default Footer