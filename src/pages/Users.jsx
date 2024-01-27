import React, {useCallback, useEffect, useState} from 'react';
import UsersList from "../components/UsersList";
import { fetchData } from '../service'
import { URLS } from "../constants";
import TopPanel from "../components/TopPanel";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sortOrder, setSortOrder] = useState('NONE');

    const handleSearchChange = useCallback(event => setSearchValue(event.target.value), [setSearchValue]);

    const handleSortChange = useCallback((event) => {
        setSortOrder(event.target.value);
    }, [setSortOrder]);

    const compareUsers = (userA, userB) => {
        if (sortOrder === 'ASC') {
            return userA.username.localeCompare(userB.username);
        } else if (sortOrder === 'DESC') {
            return userB.username.localeCompare(userA.username);
        } else {
            return 0;
        }
    };

    const filteredAndSortedUsers = users
        .filter(user => user.username.toLowerCase().includes(searchValue.toLowerCase()))
        .sort(compareUsers);

    useEffect(() => {
        fetchData(URLS.ALL_USERS).then(result => setUsers(result));
    }, []);


    return (
        <div>
            <TopPanel handleSearchChange={handleSearchChange} searchValue={searchValue} handleSortChange={handleSortChange} sortOrder={sortOrder} />
            {users ? <UsersList users={filteredAndSortedUsers} /> : 'Loading...'}
        </div>
    );
};

export default Users;