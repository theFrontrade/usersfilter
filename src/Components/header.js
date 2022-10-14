import React from "react";


const Header = ({handleClick, handleSearch}) => {

  return (

        <div className="header-div">
          <img src="/img/group 10.png" alt="img" />
          <div className="header-search-wrap">
            <input type="search" placeholder="search" onChange={(e)=>handleSearch(e)} />
            <img src="/img/search-icon.png" alt="search" onClick={() => handleClick()}/>
          </div>
          <img src="/img/group 14.png" alt="img"/>
        </div>
      
  );
};
export default Header;
