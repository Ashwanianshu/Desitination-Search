import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  search = event => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const newSearchInput = searchInput
    console.log(newSearchInput)
    const realDestinationsList = destinationsList.filter(i =>
      i.name.toLowerCase().includes(newSearchInput),
    )

    return (
      <div className="bg-container">
        <div className="cover-container">
          <h1>Destination Search</h1>
          <div className="input-container">
            <input className="input" onChange={this.search} type="search" />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              className="search-logo"
              alt="search icon"
            />
          </div>
          <ul className="image-container">
            {realDestinationsList.map(i => (
              <DestinationItem key={i.id} eachItem={i} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
