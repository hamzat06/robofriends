import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
  return (
    <div className='grid'>
      <div className='row g-3 pb-5'>
      {
        robots.map((robot, index) => {
          return(
            <Card
              id={robots[index].id}
              name={robots[index].name}
              email={robots[index].email}
              key={robots[index].id}
            />
          )
        })
      }
      </div>
    </div> 
  )
}

export default CardList