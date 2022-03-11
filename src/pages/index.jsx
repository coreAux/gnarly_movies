import React, { useContext } from "react"
import { Main } from "@styles"

import { MoviesContext } from "@contexts/MoviesContext"
import { GenresContext } from "@contexts/GenresContext"

import MovieSearch from "@components/MovieSearch"
import MoviesList from "@components/MoviesList"

const IndexPage = () => {
  const { movies, isLoading, setPage, meta } = useContext(MoviesContext)
  const { genres } = useContext(GenresContext)

  return (
    <Main>
      <MovieSearch
      />
      <MoviesList
        genres={genres}
        movies={movies}
        setPage={setPage}
        isLoading={isLoading}
        hasMoreResults={meta.hasMoreResults}
      />
    </Main>
  )
}

export default IndexPage
