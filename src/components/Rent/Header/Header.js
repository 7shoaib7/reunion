import React from 'react';
import "./Header.css"

const Header = () => {
  return (
       <div className="header">
           <h1 className="header-left">Search properties to rent</h1>
         <div className="header-right">
           <span>Search with Search Bar</span>
         </div>
       </div>
  )
}

export default Header