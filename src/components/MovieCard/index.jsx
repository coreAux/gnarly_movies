import React from "react"

import { navigate } from "gatsby"
import PosterPlaceholder from "@images/poster_placeholder.avif"
import { parseDate } from "@utils/parseDate"

import { FlexRow } from "@styles"
import { MovieCardWrapper, MovieCardDate, MovieCardBottom, MovieCardScore, H2 } from "./styles"

import GenresList from "@components/GenresList"

const MovieCard = ({ genres, movie }) => {

  const releaseDate = parseDate(movie.release_date)

  const handleClick = () => {
    navigate(`/movies/${movie.id}/`, { state: { clickedMovie: movie } })
  }

  const handleKeyPress = (e) => {
    switch (e.key.toLowerCase()) {
    case "tab":
      break
    case "enter":
      handleClick()
      break
    default:
      break
    }
  }

  return (
    <MovieCardWrapper
      onClick={handleClick}
      onKeyDown={(e) => handleKeyPress(e)}
      style={{ background: `linear-gradient(180deg, transparent 60%, hsla(0deg, 0%, 0%, .8)), url(${movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : PosterPlaceholder}) center center / cover no-repeat` }}
      role="button"
      aria-label={`${movie.title}, click Enter to read more`}
      tabIndex="0"
    >
      <MovieCardDate>
        <p>{releaseDate}</p>
      </MovieCardDate>
      <FlexRow
        $alignItems="flex-end"
        $justifyContent="space-between"
      >
        <MovieCardBottom
          $alignItems="stretch"
        >
          <H2>{movie.title}</H2>
          <FlexRow
            $alignItems="flex-end"
            $justifyContent="space-between"
          >
            <GenresList
              genres={genres}
              movieGenres={movie.genre_ids}
            />
            <MovieCardScore>{movie.vote_average}</MovieCardScore>
          </FlexRow>
        </MovieCardBottom>

      </FlexRow>
    </MovieCardWrapper>
  )
}

export default MovieCard
