import React, { memo } from 'react';

const TopPanel = ({ searchValue, handleSearchChange, sortOrder, handleSortChange}) => {
    return (
        <header className="top-panel">
            <div>
                <label htmlFor='search'>Search:</label>
                <input id='search' className="input" value={searchValue} onChange={handleSearchChange}/>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="ASC"
                        checked={sortOrder === 'ASC'}
                        onChange={handleSortChange}
                    />
                    ASC
                </label>

                <label>
                    <input
                        type="radio"
                        value="DESC"
                        checked={sortOrder === 'DESC'}
                        onChange={handleSortChange}
                    />
                    DESC
                </label>

                <label>
                    <input
                        type="radio"
                        value="NONE"
                        checked={sortOrder === 'NONE'}
                        onChange={handleSortChange}
                    />
                    NONE
                </label>
            </div>
        </header>
    );
};

export default memo(TopPanel);