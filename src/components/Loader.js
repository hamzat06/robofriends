import React from 'react'

const Loader = ({ loading }) => {
  return loading ?
    (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : null
}

export default Loader

// I used tenary operation here instead of the normal if/else statement