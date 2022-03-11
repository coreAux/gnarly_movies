import React, { useEffect, useContext, useState } from "react"
import { Main } from "@styles"
import { navigate } from "gatsby"
import { parseDate } from "@utils/parseDate"
import { GenresContext } from "@contexts/GenresContext"

import { getMovieById } from "@utils/services/movies"

import { SplatContainer, SplatWrapper, SplatPoster, SplatInformation } from "@styles"

import SEOComponent from "@components/SEOComponent"
import Button from "@components/ui/Button"
import GenresList from "@components/GenresList"

const MovieSplat = ({ params, location }) => {
  const [movie, setMovie] = useState()
  const { genres } = useContext(GenresContext)
  const { clickedMovie } = location.state ? location.state : { clickedMovie: null }
  const { id } = params

  const releaseDate = movie && parseDate(movie.release_date)

  useEffect(() => {
    if (!clickedMovie) {
      const test = async () => {
        const currentMovie = await getMovieById(id)
        setMovie(currentMovie)
      }
      test()
    } else if (clickedMovie) {
      setMovie(clickedMovie)
    }
  }, [id, clickedMovie])

  return (
    <Main>
      <SEOComponent
        title={movie ? movie.title : "Not found"}
        description={movie ? movie.overview.slice(0,160) : ""}
      />
      {!!clickedMovie && <Button
        onClick={() => navigate(-1)}
      >Back</Button>}

      {!movie && <>
        <h1>Movie not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find the movie you were looking for.
          <br />
          <Button onClick={() => navigate("/")}>Go home</Button>
        </p>
      </>}

      {movie && genres && <>
        <SplatContainer
          style={{
            background: `${movie.backdrop_path ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` : "gray"} center center / cover no-repeat`
          }}
        >
          <SplatWrapper>
            <SplatPoster
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <SplatInformation>
              <h1>{movie.title}</h1>
              <p>Coming {releaseDate}</p>
              <p>{movie.overview}</p>
              <GenresList
                genres={genres}
                movieGenres={movie.genre_ids ? movie.genre_ids : movie.genres.map((g) => g.id)}
              />
            </SplatInformation>
          </SplatWrapper>
        </SplatContainer>
      </>}
    </Main>
  )
}

export default MovieSplat
