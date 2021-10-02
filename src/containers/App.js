import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Loader from '../components/Loader'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import NothingFound from '../components/NothingFound'

function App () {

  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
        setRobots( users )
        setLoading( false )
      })
      }, []
    )

  const onSearchChange = (e) => {
    setSearchField( e.target.value )
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <div>
      <h1 className='text-center mt-5 mb-3 text-white h1'>Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <div className='container'>
          <NothingFound found={filteredRobots} robots={robots} />
          <ErrorBoundry>
            <Loader loading = {loading} />
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </div>
      </Scroll>
    </div>
  )
  
}

export default App