import React from 'react';
import './App.css';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import FriendsList from './components/FriendsList'

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
        <Link to='/friendslist'>Friends List</Link>
        <Route path='/friendslist' render={props => <FriendsList {...props} friends={this.state.friends} />} />
      </div>
    );
  }
}

export default App;
