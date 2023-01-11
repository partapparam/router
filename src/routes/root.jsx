import React from "react"
import { Outlet, Link, useLoaderData } from "react-router-dom"
import { getContacts } from "../contacts"

export async function rootLoader() {
  const contacts = await getContacts()
  return { contacts }
}

export default function Root() {
  const { contacts } = useLoaderData()
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
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
