import styled from "styled-components"
import { smbp, mdbp, FlexColumn, FocusCSS } from "@styles"

export const MovieCardWrapper = styled.div`
  color: white;
  border-radius: 10px;
  cursor: pointer;
  aspect-ratio: 2 / 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 10px 5px;
  box-shadow: inset 0 2px 3px var(--box-shadow-1), 0 0 0 1px var(--box-shadow-2), 0 5px 5px 0 var(--box-shadow-3);
  transition: transform .3s ease-out, box-shadow .3s ease-out;
  will-change: transform, box-shadow;
  ${FocusCSS}

  @media (hover) {
    &:hover {
      transform: translate3d(0, -5px, 0);
      box-shadow: inset 0 2px 3px var(--box-shadow-1), 0 0 0 1px var(--box-shadow-2), 0 10px 15px 0 var(--box-shadow-3);

      @media (prefers-reduced-motion) {
        transform: none;
        filter: brightness(110%);
      }
    }
  }
`

export const MovieCardDate = styled.div`
  font-size: 12px;
  background: black;
  padding: 2px 5px;
  border-radius: 4px;
  align-self: flex-start;
`

export const MovieCardScore = styled.div`
  background: white;
  color: black;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 900;
  font-size: 16px;
`

export const MovieCardBottom = styled(FlexColumn)`
  flex-grow: 1;
`

export const H2 = styled.h2`
  font-size: 16px;
  filter: drop-shadow(0px 0px 2px black);

  @media (${mdbp}px) {
    font-size: 14px;
  }

  @media (${smbp}px) {
    font-size: 12px;
  }
`
