// Write your code here

import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachSearch =>
      eachSearch.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="cart">
          <h1 className="head">Destination Search</h1>
          <div className="search-bar">
            <input
              type="search"
              className="search"
              placeholder="search"
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="logo"
            />
          </div>
          <div className="countries">
            <ul className="ul">
              {searchResult.map(eachCountry => (
                <DestinationItem
                  key={eachCountry.id}
                  destinationDetails={eachCountry}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
