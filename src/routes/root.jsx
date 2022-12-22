import React from "react"

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Component</h1>
        <div>
          <form role="search" id="search-form">
            <input
              type="search"
              id="q"
              aria-label="Search Contacts"
              placeholder="Search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true}></div>
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`contacts/2`}>your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  )
}
