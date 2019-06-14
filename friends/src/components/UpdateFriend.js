import React from 'react';

class UpdateFriend extends React.Component {
    state={
        friend: this.props.activeFriend
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateFriend(this.state.friend);
    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
            }
        }))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input 
                type='text'
                name='name'
                onChange={this.changeHandler}
                placeholder='Name'
                value={this.state.friend.name}
            />
            <input 
                type='number'
                name='age'
                onChange={this.changeHandler}
                placeholder='Age' 
                value={this.state.friend.age}
            />
            <input 
                type='text'
                name='email'
                onChange={this.changeHandler}
                placeholder='Email' 
                value={this.state.friend.email}
            />
            <button>Update</button>
        </form>
        )
    }
}

export default UpdateFriend