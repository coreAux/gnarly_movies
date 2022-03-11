export const parseDate = (date) => {
  const releaseDate = new Date(date)
  const dateOptions = { year: "numeric", month: "long", day: "numeric" }

  return releaseDate.toLocaleDateString(undefined, dateOptions)
}
