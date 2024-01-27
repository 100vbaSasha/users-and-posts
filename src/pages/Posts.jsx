import React, {useEffect, useState} from 'react';
import { useHref } from "react-router-dom";
import User from "../components/User";
import PostsList from "../components/PostsList";
import {fetchData} from "../service";
import { URLS } from "../constants";
import { getUserIdFromUrl } from "../utils";

const Posts = () => {
    const href = useHref();
    const userId = getUserIdFromUrl(href);
    const [userInfo, setUserInfo] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData(`${URLS.USER_BY_ID}${userId}`).then(result => setUserInfo(result));
        fetchData(`${URLS.POSTS_BY_USER_ID}${userId}`).then(result => setPosts(result));
    }, [userId]);



    return (
        <main>
            <User userInfo={userInfo} />
            <PostsList posts={posts} />
        </main>
    );
};

export default Posts;