import React from 'react'
import Card from './Card'

const CardList = ({robots, found, loading}) => {
  return (
    <div>
      { !loading && !found.length ? (
        <div className='text-center'><span className='font-weight-bold' style={{ fontWeight: 'bold', color: 'text-info' }}>Error fetching robots, check internet connection.</span> <a href='/' className='btn btn-primary ms-3'>Reload</a></div>
        ) : (
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
    </div>
  )
}

export default CardList