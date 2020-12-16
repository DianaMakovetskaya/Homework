import React from 'react';

export default function User(props){
    const {user}=props;
    return(
        <div>
            {user.id}--{user.name}--{user.email}--{user.phone}
        </div>
    );
}