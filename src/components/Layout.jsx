import React from "react"
import { GlobalStyle } from "../styles"

import Nav from "@components/Nav"
import SEOComponent from "@components/SEOComponent"
import MoviesContextWrapper from "@contexts/MoviesContext"
import GenresContextWrapper from "@contexts/GenresContext"

const Layout = ({ children }) => (
  <MoviesContextWrapper>
    <GenresContextWrapper>

      <SEOComponent
        title="Gnarly Movies"
        description="The gnarliest movies on the internet!"
      />

      <GlobalStyle />

      <Nav />
      {children}

    </GenresContextWrapper>
  </MoviesContextWrapper>
)

export default Layout
