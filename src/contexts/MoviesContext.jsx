import React, { createContext } from "react"

import useMovies from "@hooks/useMovies"

export const MoviesContext = createContext()

const MoviesContextWrapper = ({ children }) => {
  const { movies, page, setPage, searchQuery, setSearchQuery, meta, isLoading, isError } = useMovies()

  return (
    <MoviesContext.Provider
      value={{
        movies,
        meta,
        searchQuery,
        setSearchQuery,
        isLoading,
        isError,
        page,
        setPage
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContextWrapper
