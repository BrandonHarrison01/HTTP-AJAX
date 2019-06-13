import React from 'react';

function FriendsList(props) {
    return(
        <div>
            {props.friends.map(friend => (
                <div key={friend.id} >
                    <h2>
                        {friend.name} age: {friend.age}
                        <button onClick={e => props.deleteFriend(e, friend)}>
                            X
                        </button>
                    </h2>
                    <h3>{friend.email}</h3>
                </div>
            ))}
        </div>
    )
}

export default FriendsList