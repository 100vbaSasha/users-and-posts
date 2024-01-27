import React from 'react';
import Post from "./Post";

const PostsList = ({ posts }) => {
    return (
        <div className="posts-list">
            <ul>
                {Array.isArray(posts) && posts?.length ? posts.map(post => <Post postInfo={post}></Post>) : 'No posts'}
            </ul>
        </div>
    );
};

export default PostsList;