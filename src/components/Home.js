import React from "react";
import "../components/css/Home.css";
import theBoneCollector from "./pictures/theBoneCollector.PNG";
import infinits from "./pictures/infinits.PNG";
import reptile from "./pictures/reptile.PNG";
import preacher from "./pictures/preacher.PNG";
import nowhere from "./pictures/nowhere.PNG";
import burningBetrayal from "./pictures/burningBetrayal.PNG";
import choona from "./pictures/choona.PNG";
import blackPhone from "./pictures/blackPhone.PNG";
import oldDads from "./pictures/oldDads.PNG";
import elite from "./pictures/elite.PNG";
import creature from "./pictures/creature.PNG";
import sisterDeath from "./pictures/sisterDeath.PNG";
import bazar from "./pictures/bazar.PNG";
import itefaq from "./pictures/itefaq.PNG";
import okJannu from "./pictures/okJannu.PNG";
import theBody from "./pictures/theBody.PNG";
import drishyam from "./pictures/drishyam.PNG";
import thar from "./pictures/thar.PNG";
import drive from "./pictures/drive.PNG";
import ludo from "./pictures/ludo.PNG";
import dhamaka from "./pictures/dhamaka.PNG";
import ginnyWedsSunny from "./pictures/ginnyWedsSunny.PNG";
import aeDilHaiMushkil from "./pictures/aeDilHaiMushkil.PNG";
import mimi from "./pictures/mimi.PNG";
import dreamGirl2 from "./pictures/dreamGirl2.PNG";
import iraivan from "./pictures/iraivan.PNG";
import chandramukhi2 from "./pictures/chandramukhi2.PNG";
import burningBetrayal2 from "./pictures/burningBetrayal2.PNG";
import painHustlers from "./pictures/painHustlers.PNG";
import omg from "./pictures/omg.PNG";
import sisterDeath2 from "./pictures/sisterDeath2.PNG";
import khufiya from "./pictures/khufiya.PNG";
import blackPhone2 from "./pictures/blackPhone2.PNG";
import jaaneJaan from "./pictures/jaaneJaan.PNG";
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
import ImageSlider from "./ImageSlider";
import MultiImageSlider from "./MultiImageSlider";
import RankingSlider from "./RankingSlider";

import slide1 from "./pictures/slide1.jpeg";
import slide2 from "./pictures/slide2.jpg";
import slide3 from "./pictures/slide3.jpg";
import slide4 from "./pictures/slide4.jpg";

export default function Home() {

  const images=[
    slide1,
    slide2,
    slide3,
    slide4
  ]
  const multiImage1 = [
    [theBoneCollector, infinits, reptile, preacher, nowhere, burningBetrayal],
    [choona, blackPhone, oldDads, elite, sisterDeath, creature],
  ];
  const multiImage2 = [
    [bazar, itefaq, okJannu, theBody, drishyam, thar],
    [drive, ludo, dhamaka, ginnyWedsSunny, aeDilHaiMushkil, mimi],
  ];

  const multiImage3 = [
    [dreamGirl2, iraivan, chandramukhi2, burningBetrayal2, painHustlers],
    [omg, sisterDeath2, khufiya, blackPhone2, jaaneJaan],
  ];

  const multiImage4 = [
    [transformers, loveAndMonsters, extraction, spiderMan, jackReacher, pasificRim],
    [assassinsCreed, projectPower, greyMan, missionImposible, inferno, adamProject],
  ];


  return (
    <>
      <ImageSlider images = {images} />
      <div className="myBody">
        <h1 className="heading">New Releases</h1>
        <MultiImageSlider images={multiImage1} />

        <h2 className="heading">Indian Movies</h2>
        <MultiImageSlider images={multiImage2} />

        <h3 className="heading">Top 10 movies in Pakistan</h3>
        <RankingSlider images={multiImage3} />

        <h4 className="heading2">Blockbuster Exiting US Movies</h4>
        <MultiImageSlider images={multiImage4} />
      </div>
    </>
  );
}
