import React,{useEffect,useState} from "react";
import "./css/MyList.css";
import nowhere from "./pictures/nowhere.PNG";
import burningBetrayal from "./pictures/burningBetrayal.PNG";
import choona from "./pictures/choona.PNG";
import blackPhone from "./pictures/blackPhone.PNG";
import oldDads from "./pictures/oldDads.PNG";
import sisterDeath from "./pictures/sisterDeath.PNG";
import transformers from "./pictures/transformers.PNG";
import loveAndMonsters from "./pictures/loveAndMonsters.PNG";
import spiderMan from "./pictures/spiderMan.PNG";
import extraction from "./pictures/extraction.PNG";
import assassinsCreed from "./pictures/assassinsCreed.PNG";
import projectPower from "./pictures/projectPower.PNG";
import inferno from "./pictures/inferno.PNG";
import adamProject from "./pictures/adamProject.PNG";
import greyMan from "./pictures/greyMan.PNG";
import missionImposible from "./pictures/missionImposible.PNG";
import pasificRim from "./pictures/pasificRim.PNG";
import jackReacher from "./pictures/jackReacher.PNG";
import bazar from "./pictures/bazar.PNG";
import itefaq from "./pictures/itefaq.PNG";
import okJannu from "./pictures/okJannu.PNG";
import theBody from "./pictures/theBody.PNG";
import drishyam from "./pictures/drishyam.PNG";
import thar from "./pictures/thar.PNG";
import ginnyWedsSunny from "./pictures/ginnyWedsSunny.PNG";
import MultiImageSlider from "./MultiImageSlider";
import RankingSlider from "./RankingSlider";
import ImageSlider from "./ImageSlider";

export default function MyList() {


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
      <div className="MyList">
        <div className={scrolled ? 'listHeading scrolled' : 'listHeading'} >
          <h1 className="myListHeading">My List</h1>
        </div>
      </div>
      <div className="listMovies">
        <img src={nowhere} alt="" />
        <img src={burningBetrayal} alt="" />
        <img src={choona} alt="" />
        <img src={blackPhone} alt="" />
        <img src={oldDads} alt="" />
        <img src={sisterDeath} alt="" />
        <img src={itefaq} alt="" />
        <img src={inferno} alt="" />
        <img src={bazar} alt="" />
        <img src={thar} alt="" />
        <img src={extraction} alt="" />
        <img src={projectPower} alt="" />
        <img src={pasificRim} alt="" />
        <img src={theBody} alt="" />
        <img src={drishyam} alt="" />
        <img src={transformers} alt="" />
        <img src={spiderMan} alt="" />
        <img src={ginnyWedsSunny} alt="" />
      </div>
    </>
  );
}
