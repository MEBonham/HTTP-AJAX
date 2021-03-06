import React from "react";

const FriendDisplay = props => {
    return (
        <div className="friends-display-container">
            {props.friends.map(friend => (
                <div className={(props.editId === friend.id) ? "friend-card active" : "friend-card"}>
                    <div className="first-line">
                        <img 
                            onClick={event => {
                                props.deleteFriend(event, friend.id);
                            }} 
                            className="delX" 
                            src="./images/Red_x.png" 
                            alt="Delete" 
                        />
                        <img
                            onClick={event => {
                                props.toggleEdit(event, friend.id);
                            }}
                            className="edit"
                            src="./images/pencil.png"
                            alt="Edit" 
                        />
                        <h2>{friend.name}</h2>
                    </div>
                    <p>Age: <strong>{friend.age}</strong></p>
                    <p>{friend.email}</p>
                    {/* <p>{JSON.stringify(friend)}</p> */}
                </div>
            ))}
        </div>
    );
}

export default FriendDisplay;