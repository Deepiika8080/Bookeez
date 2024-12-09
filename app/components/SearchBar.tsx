import React, { useState } from 'react'

const SearchBar = () => {
    const [searchQuery, setsearchQuery] = useState("")

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setsearchQuery(query)
};
return (
    <>
        <div className="searchBar">
            <input
            value={searchQuery}
                type="text"
                placeholder='Search Books by their Title , author , ISBN'
                className='w-[60vw] ml-40 rounded-3xl mt-8 bg-[#C9C6BC] p-4 '
                onChange={handleChange}
            />
        </div>
    </>
)
}

export default SearchBar