import React from "react"
import { Helmet } from "react-helmet"

const SEOComponent = ({ title, description }) => (
  <Helmet
    htmlAttributes={{
      lang: "en",
    }}
    title={`${title === "Gnarly Movies" ? "" :  title + " | "}Gnarly Movies`}
    meta={[
      {
        name: "description",
        content: description,
      }
    ]}
  />
)

export default SEOComponent
