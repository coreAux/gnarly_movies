import React from "react"

import { MovieCardContainer } from "@styles"

import InfiniteScroll from "react-infinite-scroll-component"
import MovieCard from "@components/MovieCard"

const MoviesList = ({ genres, movies, setPage, hasMoreResults, isLoading }) => {

  const loadMoreResults = () => {
    if (!isLoading) {
      setPage((page) => page + 1)
    }
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMoreResults}
      hasMore={!isLoading && hasMoreResults}
      scrollThreshold="200px"
      loader={<p>Loading...</p>}
      endMessage={<span></span>}
    >
      <MovieCardContainer>
        {movies.map((movie) => (
          <MovieCard
            genres={genres}
            key={movie.id}
            movie={movie}
          />
        ))}

      </MovieCardContainer>
      {!isLoading && movies.length <= 0 && <p style={{textAlign:"center"}}>Sorry we couldn&apos;t find that movie. Try searching for something different.</p>}
    </InfiniteScroll>
  )
}

export default MoviesList
