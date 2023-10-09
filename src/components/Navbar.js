import React,{useState} from "react";
import netflixLogo from "../pictures/netflixLogo.png";
import "../components/css/Navbar.css"; // Import the CSS file for styling

export default function Navbar() {

  const[toggle,setToggle]=useState(false)

const toggleSearch = ()=>{

  if(toggle===false){
    setToggle(true )
  }
  if(toggle===true){
    setToggle(false )
  }
}

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={netflixLogo} alt="" />
        </div>

        <li>
          <a className="navHome" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">TV Shows</a>
        </li>
        <li>
          <a className="myList" href="#">MY List</a>
        </li>

        <div className="navIcons">

          {toggle===false? <i id="searchPrev" role="button" onClick={toggleSearch} className="fa-solid fa-magnifying-glass"></i>:
          <div className="search">
          <i role="button" onClick={toggleSearch}  id="searchIcon" className="fa-solid fa-magnifying-glass"></i>
          <input  type="text" />
          </div>}
         
          
          <a className="Kids" herf="#">Kids</a>
        </div>
      </nav>
    </div>
  );
}
