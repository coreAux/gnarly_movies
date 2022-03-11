import React, { createContext } from "react"

import useGenres from "@hooks/useGenres"

export const GenresContext = createContext()

const GenresContextWrapper = ({ children }) => {
  const { genres, isLoading, isError } = useGenres()

  return (
    <GenresContext.Provider
      value={{
        genres,
        isLoading,
        isError
      }}
    >
      {children}
    </GenresContext.Provider>
  )
}

export default GenresContextWrapper
