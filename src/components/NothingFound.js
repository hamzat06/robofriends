import React from 'react'

const NothingFound = ({ found, robots }) => {
  if (robots.length > 0) {
    if (found < 1) {
      return (
        <div className='text-center'>
          <h3 className='text-white'>Nothing Found</h3>
        </div>
      )
    }
  }
  return <span></span>
}

export default NothingFound