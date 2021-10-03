import React from 'react'

const SearchBox = ({ searchChange }) => {
  function preventSubmit (e) {
    e.preventDefault()
  }
  return (
    <form className="mb-5 mx-auto" style={{ maxWidth: 200 }} onSubmit={preventSubmit}>
      <input type='Search' placeholder='Search Robots' className='form-control me-3' onChange={searchChange} />
    </form>
  )
}

export default SearchBox