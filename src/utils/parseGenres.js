export const parseGenres = (genres, movieGenres) => {
  return genres.filter(e => movieGenres.includes(e.id))
}
