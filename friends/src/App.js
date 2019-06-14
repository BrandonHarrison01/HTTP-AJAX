import React from 'react';
import './App.css';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'
import UpdateFriend from './components/UpdateFriend'

class App extends React.Component {
  state = {
    friends: [],
    activeFriend: null
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
  
  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({ activeFriend: friend });
    this.props.history.push('/updatefriend');
  }

  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data})
        this.props.history.push('/friendslist');
      })
      .catch(err => console.log(err))
  }

  deleteFriend = (e, friend) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
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
        <Route path='/friendslist' render={props => <FriendsList {...props} friends={this.state.friends} deleteFriend={this.deleteFriend} setUpdateForm={this.setUpdateForm} />} />
        <Route path='/addfriend' render={props => <AddFriend {...props} friends={this.state.friends} newFriend={this.newFriend} />} />
        <Route path='/updatefriend' render={props => <UpdateFriend {...props} friends={this.state.friends} updateFriend={this.updateFriend} activeFriend={this.state.activeFriend} />} />
      </div>
    );
  }
}

export default App;
