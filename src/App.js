/* eslint-disable prettier/prettier */
import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInputValue: '', userDetailsList: initialUserDetailsList}

  onChangeSearchInput = event => {
    this.setState({
      searchInputValue: event.target.value,
    })
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUserDetailsList = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )

    this.setState({
      userDetailsList: filteredUserDetailsList,
    })
  }

  render() {
    const {searchInputValue, userDetailsList} = this.state
    console.log(searchInputValue)
    const searchedUserList = userDetailsList.filter(each =>
      each.name.includes(searchInputValue),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInputValue}
        />
        <ul className="list-container">
          {searchedUserList.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              onDeleteUser={this.onDeleteUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
