import React from 'react'

const Card = (props) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div className='card shadow'>
        <div className='card-body'>
          <img src={`https://robohash.org/${props.id}?200x200`} alt='robot' style={{width: '100%'}} className='mb-3' />
          <div className='text-center'>
            <h4>{props.name}</h4>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card