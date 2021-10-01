import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Loader from '../components/Loader'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import NothingFound from '../components/NothingFound'

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchField: '',
      loading: false
    }
  }

  componentDidMount () {
    this.setState({ loading: true })
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      this.setState({ robots: users })
      this.setState({ loading: false })
    })
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render () {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div>
        <h1 className='text-center mt-5 mb-3 text-white h1'>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <div className='container'>
            <NothingFound found={filteredRobots} robots={this.state.robots} />
            <ErrorBoundry>
              <Loader loading = { this.state.loading } />
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </div>
        </Scroll>
      </div>
    )
  }
}

export default App