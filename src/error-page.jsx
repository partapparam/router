import React from "react"
import { useRouteError } from "react-router-dom"

/**
 *
 * useRouteError provides the error that was thrown.
 * Pretty much all errors will be handled by this page
 */

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  return (
    <div id="error-page">
      <h1>Oops</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
