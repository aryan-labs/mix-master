import React, { useContext } from 'react';
import { StoreContext } from './context'; // Import the correct context
import './index.css'

const SearchBox = () => {
  const { search, setSearch,setSearchItem } = useContext(StoreContext); // Access context values

  const submit=(e)=>{
    e.preventDefault()
    setSearchItem(search)
    

  }

  return (
    <div className='search-item'>
        <form onSubmit={submit}>
      {/* Controlled input */}
      <input
        type="text"
        placeholder="Enter the drink"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
