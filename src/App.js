import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import slide1 from "./components/pictures/slide1.jpeg";
// import slide2 from "./components/pictures/slide2.jpg";
// import slide3 from "./components/pictures/itefaq.PNG";
// import slide4 from "./components/pictures/choona.PNG";
import MultiImageSlider from "./components/MultiImageSlider";
import Movies from "./components/Movies";
import MyList from "./components/MyList";
import TvShows from "./components/TvShows";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
           <Route exact path="/movies" element={<Movies/>} /> 
           <Route exact path="/MyList" element={<MyList/>} /> 
           <Route exact path="/TvShows" element={<TvShows/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
