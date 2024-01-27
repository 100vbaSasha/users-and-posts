import React from 'react';

const Post = ({ postInfo }) => {
    const { title, id } = postInfo;
    return (
        <li key={id}>
            {`${id}. ${title}`}
        </li>
    );
};

export default Post;