import React, { useContext } from "react"

import { MoviesContext } from "@contexts/MoviesContext"

import Input from "@components/ui/Input"

export const MovieSearch = () => {
  const { searchQuery, setSearchQuery } = useContext(MoviesContext)

  return (
    <div style={{marginTop: "35px"}}>
      <Input
        type="text"
        placeholder="Search movies, e.g. Batman, Lord of the Rings, etc."
        value={searchQuery}
        aria-label="Search movies"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export default MovieSearch
