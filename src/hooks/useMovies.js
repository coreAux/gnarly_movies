import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

import { getMoviesByPage, getMoviesBySearchQuery } from "@utils/services/movies"

const useMovies = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [meta, setMeta] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000)

  useEffect(() => {
    setPage(1)
  }, [debouncedSearchQuery])

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const movies = await getMoviesByPage(page)
        const results = movies.results
        const meta = await {
          page: movies.page,
          total_pages: movies.total_pages,
          total_results: movies.total_results,
          hasMoreResults: movies.page < movies.total_pages
        }
        setMeta(meta)
        setMovies((prev) => page !== 1 ? [...prev, ...results] : results)
      } catch (error) {
        console.error("Error: ", error)
        setIsError(true)
      }

      setIsLoading(false)
    }

    const fetchMoviesBySearchQuery = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const movies = await getMoviesBySearchQuery(debouncedSearchQuery, page)
        const results = await movies.results
        const meta = await {
          page: movies.page,
          total_pages: movies.total_pages,
          total_results: movies.total_results,
          hasMoreResults: movies.page < movies.total_pages
        }
        setMeta(meta)
        setMovies((prev) => page !== 1 ? [...prev, ...results] : results)
      } catch (error) {
        console.error("Error: ", error)
        setIsError(true)
      }

      setIsLoading(false)
    }

    if (!debouncedSearchQuery) {
      fetchUpcomingMovies()
    } else if (debouncedSearchQuery) {
      fetchMoviesBySearchQuery()
    }

  }, [page, debouncedSearchQuery])

  return { movies, page, setPage, searchQuery, setSearchQuery, meta, isLoading, isError }
}

export default useMovies
