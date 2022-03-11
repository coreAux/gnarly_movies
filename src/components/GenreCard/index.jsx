import React from "react"

import { GenreWrapper } from "./styles"

const GenreCard = ({ genre }) => (
  <GenreWrapper
    $id={genre.id}
  >
    {genre.name}
  </GenreWrapper>
)

export default GenreCard
