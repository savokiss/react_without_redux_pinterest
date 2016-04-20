import React from 'react';
import ReactDOM from 'react-dom';
import TagMenu from './TagMenu.jsx';


function SearchBar() {
  return (
    <div className="top">
      <input className="searchInput" />
      <button className="searchButton">搜索</button>
    </div>
  )
}
export default SearchBar;
