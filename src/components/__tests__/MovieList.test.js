import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"

import MoviesList from "../MoviesList"

describe("<MoviesList />", () => {
  let component

  const mockHandler = jest.fn()

  beforeEach(() => {
    const movies = [{
      backdrop_path: "/2rNt11UPFYpz0MXMephmO0uyM5h.jpg",
      genre_ids: [12, 35],
      id: 1,
      original_title: "First Movie",
      overview: "Overview of the first movie...",
      poster_path: "/sI3hQMTyrF9F8jU1qA8qPHLKCgG.jpg",
      release_date: "2021-01-01",
      title: "First Movie",
    },{
      backdrop_path: "/2rNt11UPFYpz0MXMephmO0uyM5h.jpg",
      genre_ids: [878],
      id: 2,
      original_title: "Second Movie",
      overview: "Overview of the second movie...",
      poster_path: "/sI3hQMTyrF9F8jU1qA8qPHLKCgG.jpg",
      release_date: "2022-02-02",
      title: "Second Movie",
    }]

    const genres = [{
      id: 12,
      name: "Action"
    }, {
      id: 35,
      name: "Adventure"
    }, {
      id: 878,
      name: "Family"
    }]

    component = render(
      <MoviesList
        hasMoreResults={false}
        isLoading={false}
        page="1"
        genres={genres}
        movies={movies}
      />
    )
  })

  test("Movie titles are rendered", () => {
    expect(component.container).toHaveTextContent("First Movie")
    expect(component.container).toHaveTextContent("Second Movie")
    expect(component.container).not.toHaveTextContent("Third Movie");

  })

  test("Movie genres are rendered", () => {
    expect(component.container).toHaveTextContent("Adventure")
    expect(component.container).toHaveTextContent("Action")
    expect(component.container).toHaveTextContent("Family")
    expect(component.container).not.toHaveTextContent("Thriller")
  })
})
