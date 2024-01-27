import React from 'react';
import UserIcon from '../icons/1077114.png'
import {Link} from "react-router-dom";
import {isEmptyObject} from "../utils";

const User = ({ userInfo, hasLink = false }) => {
    const { name, email, id, username } = userInfo;
    return (
        <div className="user-card">
            {isEmptyObject(userInfo) ? 'No user info' :
                <li key={id}>
                    <img className="user-photo" src={UserIcon} alt='user icon' />
                    <div className="user-info">
                        <p><strong>Name: </strong>{name}</p>
                        <p><strong>Email: </strong>{email}</p>
                        <p><strong>Username: </strong>{username}</p>
                        {hasLink && <Link to={`/${id}`}>Posts</Link>}
                    </div>
                </li>
            }
        </div>
    );
};

export default User;