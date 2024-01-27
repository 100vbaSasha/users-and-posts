import React from 'react';
import User from "./User";

const UsersList = ({ users }) => {
    return (
        <main className="users-list">
            <ul>
                {Array.isArray(users) && users?.length ? users.map(user => <User userInfo={user} hasLink></User>) : 'No users'}
            </ul>
        </main>
    );
};

export default UsersList;