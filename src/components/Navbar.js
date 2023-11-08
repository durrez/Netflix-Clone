import React, { useState, useEffect } from 'react';
import netflixLogo from "./pictures/netflixLogo.png";
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

const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; // Adjust this value as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="logo">
          <img src={netflixLogo} alt="" />
        </div>

        <li>
          <a className="navHome" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
        <li>
          <a href="/TvShows">TV Shows</a>
        </li>
        <li>
          <a className="myList" href="/MyList">MY List</a>
        </li>

        <div className="navIcons">

          {toggle===false? <i id="searchPrev" role="button" onClick={toggleSearch} className="fa-solid fa-magnifying-glass"></i>:
          <div className="search">
          <i role="button" onClick={toggleSearch}  id="searchIcon" className="fa-solid fa-magnifying-glass"></i>
          <input  type="text" />
          </div>}
         
          
          <a className="Kids" herf="/">Kids</a>
        </div>
      </nav>
    </>
  );
}
