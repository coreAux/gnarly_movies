require("@fontsource/audiowide/400.css")
require("@fontsource/roboto/400.css")
require("@fontsource/roboto/900.css")

const React = require("react")
const Layout = require("./src/components/Layout").default

exports.wrapPageElement = ({ element, props }) => {

  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}
