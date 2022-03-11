import React from "react"
import { parseGenres } from "@utils/parseGenres"

import { GenreCardContainer } from "@styles"
import GenreCard from "@components/GenreCard"

const GenresList = ({ genres, movieGenres }) => {
  const intersection = parseGenres(genres, movieGenres)

  return (
    <GenreCardContainer>
      {intersection.map((g) => (
        <GenreCard
          key={g.name}
          genre={g}
        />
      ))}
    </GenreCardContainer>
  )
}

export default GenresList
