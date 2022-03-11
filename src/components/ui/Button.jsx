import React from "react"

import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  background: var(--pink);
  border-radius: 9999px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 5px 15px;
  margin: 10px 0;
  color: white;

  @media (hover) {
    &:hover {
      filter: brightness(110%);
    }
  }
`

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
)

export default Button
