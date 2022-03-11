import axios from "axios"

const basePath = "https://api.themoviedb.org/3"
const config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  }
}

export const getGenres = async () => {
  try {
    const response = await axios.get(`${basePath}/genre/movie/list?api_key=${process.env.GATSBY_TMDB_API_KEY}&language=en-US`, config)
    const data = await response.data
    return data
  } catch (e) {
    console.error(e)
  }
}
