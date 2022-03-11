import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  text-transform: uppercase;
`

const H1 = styled.h1`
  margin: 0 40px;
`

const Nav = () => (
  <StyledNav>
    <Link to="/">Home</Link>
    <H1 style={{textAlign:"center"}}>Gnarly Movies</H1>
  </StyledNav>
)

export default Nav
