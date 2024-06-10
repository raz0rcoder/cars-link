import React from "react"

// import { SecondaryMenu } from "@/components/site-header"
import '/public/css/style.css';


export function Head() {
  return (
    <>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta
          name="Description"
          content="Category: Internet, This is an automatically generated default server page successfully deployed by (mt) Media Temple web hosting."
      />
      <meta name="robots" content="NOINDEX, FOLLOW, NOODP" />
      <meta httpEquiv="pragma" content="no-cache" />
      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="cache-control" content="max-age=0" />
      <meta httpEquiv="expires" content={0} />
      <meta httpEquiv="Expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
      <title>CAR</title>
      <link href="css/style.css" rel="stylesheet" />
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
      />
    </>
  )
}
