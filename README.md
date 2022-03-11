# Gnarly Movies

## Build instructions
To create a build, first replace `<<API_KEY>>` with a TMDB API key in the `.env.production` file, then run `npm run build`. The build can be served with `npm run serve`.

## Third-party libraries

|Library|Explanation|
|:---|---|
|Gatsby|I decided to use [Gatsby](https://www.gatsbyjs.com/) since it provides a fast front-end and comes with a lot of great plugins, as well as out-of-the-box routing and SSR.|
|@fontsource|Self-hosted Google Fonts, for user privacy and design purposes.|
|axios|Used to send requests to the TMDB endpoints.|
|react-infinite-scroll-component|Providing infinite scrolling to the movies list, as long as there are more movies to be loaded from TMDBD.|
|use-debounce|Used for the search function. Instead of requiring the user to click Enter or a search-button, I wanted the search function to feel intuitive and easy to use.|
|styled-components|CSS-in-JS library for styling.|
|devDependencies|Includes eslint, jest, testing-library, and is primariliy used to enforce coding styles, as well as required for unit testing.|
