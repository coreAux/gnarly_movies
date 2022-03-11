import styled from "styled-components"

export const GenreWrapper = styled.div`
  font-size: 10px;
  background: #111;
  color: white;
  border-radius: 5px;
  padding: 2px 5px;
  text-transform: uppercase;
  margin: 0 3px 3px 0;
  border: 1px hsl(${({$id}) => $id ** 3}deg, 50%, 50%) solid;
`
