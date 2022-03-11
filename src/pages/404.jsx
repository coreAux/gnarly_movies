import * as React from "react"
import { navigate } from "gatsby"

import { Main } from "@styles"

import Button from "@components/ui/Button"

const NotFoundPage = () => (
  <Main>
    <h1>Page not found</h1>
    <p>
      Sorry{" "}
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>{" "}
      we couldn’t find what you were looking for.
      <br />
      <Button onClick={() => navigate("/")}>Go home</Button>
    </p>
  </Main>
)

export default NotFoundPage
