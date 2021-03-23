import React from 'react'
import {Link} from 'react-router-dom'

const Page404 = () => {
  return (
    <>
      <h1>Woops, looks like something went wrong</h1>
      <Link to="/">Go back home</Link>
    </>
  )
}

export default Page404