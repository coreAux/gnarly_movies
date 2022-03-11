import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  color-scheme: dark;
  width: 100%;
  padding: 10px 20px;
  border-radius: 9999px;
  border: none;
  box-shadow: inset 0 2px 3px var(--box-shadow-1), 0 0 0 1px var(--box-shadow-2), 0 5px 5px 0 var(--box-shadow-3);

  @media (prefers-color-scheme: light) {
    color-scheme: light;
  }
`

const Input = ({ ...props }) => (
  <StyledInput
    {...props}
  />
)

export default Input
