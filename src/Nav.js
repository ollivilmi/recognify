import React from 'react';

const TitleButton = props => {
    return (
      <button className="titleButton" onClick={props.onClick}>
        {props.title}
      </button>
    )
  }
  
  const SearchBar = props => {
    return (
    <div className="searchBar">
      <input type="text" className="searchInput"/>
      <button onClick={props.onClick} className="searchButton">Search</button>
    </div>
    );
  }
  
  const NavBar = props => {
      return (
        <div className="navBar">
          <TitleButton onClick={props.handleClick} title={props.title}/>
          <SearchBar onClick={props.handleClick}/>
        </div>
      )
  }

  export default NavBar;