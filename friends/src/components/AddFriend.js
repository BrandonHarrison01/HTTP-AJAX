import React from 'react';

class AddFriend extends React.Component{
    state={
        friend: {
            name: '',
            age: '',
            email: ''
        }
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

    handleSubmit = e => {
        e.preventDefault();
        this.props.newFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render(){
        return (
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
                <button>Add friend</button>
            </form>
        )
    }
}

export default AddFriend;