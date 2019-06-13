import React from 'react';
import './App.css';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'

class App extends React.Component {
  state = {
    friends: []
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res)
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }

  newFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        <nav>
          <NavLink className='link' activeClassName='active' exact to='/'>Home</NavLink>
          <NavLink className='link' activeClassName='active' to='/friendslist'>Friends List</NavLink>
          <NavLink className='link' activeClassName='active' to='/addfriend'>Add a Friend</NavLink>
        </nav>
        <h1 className='.App-logo'>Welcome Friends</h1>
        <Route path='/friendslist' render={props => <FriendsList {...props} friends={this.state.friends} />} />
        <Route path='/addfriend' render={props => <AddFriend {...props} friends={this.state.friends} newFriend={this.newFriend} />} />
      </div>
    );
  }
}

export default App;
