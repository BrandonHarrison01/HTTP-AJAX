import React from 'react';
import './App.css';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

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

  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/addfriend'>Add a Friend</Link>
        <Link to='/friendslist'>Friends List</Link>
        <Route path='/friendslist' render={props => <FriendsList {...props} friends={this.state.friends} />} />
        <Route path='/addfriend' render={props => <AddFriend {...props} friends={this.state.friends} />} />
      </div>
    );
  }
}

export default App;
