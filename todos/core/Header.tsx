import Image from 'next/image'
import Link from 'next/link'
import React, { FC, Fragment } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 8px;
  width: calc(100% - 16px);
  
  @media only screen and (min-width: 1200px) {
    padding: 16px;
    width: calc(100% - 32px);
  }

  ul {
    display: flex;
    justify-content: space-between;
  }
`

const Header: FC = (): JSX.Element => {
  return (
    <StyledHeader>
      <ul role='navigation'>
        <li>
          <Link href='/'>
            <Fragment>
              <Image alt='application logo' height={32} layout='fixed' src='/favicon-32x32.png' width={32} />
            </Fragment>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <Fragment>
              <Image alt='application code on github' height={32} layout='fixed' src='/github-512x512.png' width={32} />
            </Fragment>
          </Link>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default Header