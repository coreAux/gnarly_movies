import { useEffect, useState } from "react"

import { getGenres } from "@utils/services/genres"

const useMovies = () => {
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchGenres = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const { genres } = await getGenres()
        setGenres(genres)
      } catch (error) {
        console.error("Error: ", error)
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchGenres()
  }, [])

  return { genres, isLoading, isError }
}

export default useMovies
