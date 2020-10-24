import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div style={{display: `flex`, textAlign: `center`, alignItems: `center`, flexDirection: `column`, justifyContent: `center`, minHeight: `100vh`}}>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage