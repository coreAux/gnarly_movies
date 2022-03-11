import axios from "axios"

const basePath = "https://api.themoviedb.org/3"
const config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  }
}

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${basePath}/movie/${id}?api_key=${process.env.GATSBY_TMDB_API_KEY}&language=en-US`, config)
    const data = await response.data
    return data
  } catch (e) {
    console.error(e)
  }
}

export const getMoviesByPage = async (page = 1) => {
  try {
    const response = await axios.get(`${basePath}/movie/upcoming?api_key=${process.env.GATSBY_TMDB_API_KEY}&language=en-US&page=${page}`, config)
    const data = await response.data
    return data
  } catch (e) {
    console.error(e)
  }
}

export const getMoviesBySearchQuery = async (query, page = 1) => {
  try {
    const response = await axios.get(`${basePath}/search/movie?api_key=${process.env.GATSBY_TMDB_API_KEY}&language=en-US&page=${page}&query=${query}`, config)
    const data = await response.data
    return data
  } catch (e) {
    console.error(e)
  }
}
