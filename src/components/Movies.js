import React from 'react'
import "../components/css/Home.css";
import theBoneCollector from "./pictures/theBoneCollector.PNG"
import infinits from "./pictures/infinits.PNG"
import reptile from "./pictures/reptile.PNG"
import preacher from "./pictures/preacher.PNG"
import nowhere from "./pictures/nowhere.PNG"
import burningBetrayal from "./pictures/burningBetrayal.PNG"
import choona from "./pictures/choona.PNG"
import blackPhone from "./pictures/blackPhone.PNG"
import oldDads from "./pictures/oldDads.PNG"
import elite from "./pictures/elite.PNG"
import creature from "./pictures/creature.PNG"
import sisterDeath from "./pictures/sisterDeath.PNG"
import bazar from "./pictures/bazar.PNG"
import itefaq from "./pictures/itefaq.PNG"
import okJannu from "./pictures/okJannu.PNG"
import theBody from "./pictures/theBody.PNG"
import drishyam from "./pictures/drishyam.PNG"
import thar from "./pictures/thar.PNG"
import drive from "./pictures/drive.PNG"
import ludo from "./pictures/ludo.PNG"
import dhamaka from "./pictures/dhamaka.PNG"
import ginnyWedsSunny from "./pictures/ginnyWedsSunny.PNG"
import aeDilHaiMushkil from "./pictures/aeDilHaiMushkil.PNG"
import mimi from "./pictures/mimi.PNG"
import dreamGirl2 from "./pictures/dreamGirl2.PNG"
import iraivan from "./pictures/iraivan.PNG"

import kate from "./pictures/kate.PNG"
import tripleFrountier from "./pictures/tripleFrountier.PNG"
import interceptor from "./pictures/interceptor.PNG"
import gridlock from "./pictures/gridlock.PNG"
import extraction from "./pictures/extraction.PNG"
import adamProject from "./pictures/adamProject.PNG"
import pasificRim from "./pictures/pasificRim.PNG"
import inferno from "./pictures/inferno.PNG"
import heartOfStone from "./pictures/heartOfStone.PNG"
import fastNine from "./pictures/fastNine.PNG"
import sixUnderground from "./pictures/sixUnderground.PNG"
import jackReacher from "./pictures/jackReacher.PNG"
import armyOfTheDead from "./pictures/armyOfTheDead.PNG"
import raatAkeliHai from "./pictures/raatAkeliHai.PNG"
import gumraah from "./pictures/gumraah.PNG"
import chorNikalKeBhaga from "./pictures/chorNikalKeBhaga.PNG"
import aka from "./pictures/aka.PNG"
import luthar from "./pictures/luthar.PNG"
import hit from "./pictures/hit.PNG"
import goneGirl from "./pictures/goneGirl.PNG"
import whiteTiger from "./pictures/whiteTiger.PNG"
import catchMeIfYouCan from "./pictures/catchMeIfYouCan.PNG"
import crawlSpace from "./pictures/crawlSpace.PNG"
import jaaneJaanx from "./pictures/jaanejaanx.PNG"


import chandramukhi2 from "./pictures/chandramukhi2.PNG"
import burningBetrayal2 from "./pictures/burningBetrayal2.PNG"
import painHustlers from "./pictures/painHustlers.PNG"
import omg from "./pictures/omg.PNG"
import sisterDeath2 from "./pictures/sisterDeath2.PNG"
import khufiya from "./pictures/khufiya.PNG"
import blackPhone2 from "./pictures/blackPhone2.PNG"
import jaaneJaan from "./pictures/jaaneJaan.PNG"

import MultiImageSlider from './MultiImageSlider';
import RankingSlider from './RankingSlider';
import ImageSlider from './ImageSlider';


import slide4 from "./pictures/slide4.jpg";

export default function Movies() {

  const images=[
    slide4
  ]

  const multiImage1=[
    [
      interceptor,
      kate,
      extraction ,
      adamProject,
      tripleFrountier,
      gridlock
    ],
    [
      pasificRim,
      inferno,
      heartOfStone,
      fastNine,
      sixUnderground,
      jackReacher,
    ],
    
  ]
  const multiImage2=[
    [
      armyOfTheDead,
      raatAkeliHai,
      gumraah,
      chorNikalKeBhaga,
      luthar,
      aka,
    ],
    [
      hit,
      goneGirl,
      whiteTiger,
      catchMeIfYouCan,
      crawlSpace,
      jaaneJaanx,
    ]
    
  ]

  const multiImage3=[
    [
      dreamGirl2,
      iraivan,
      chandramukhi2,
      burningBetrayal2,
      painHustlers,
    ],
    [
      omg,
      sisterDeath2,
      khufiya,
      blackPhone2,
      jaaneJaan,
    ],
    
  ]

  return (
    <>
    <ImageSlider images = {images}/>
    <div className='myBody'>
      <h1 className="heading">
        Action movies
      </h1>
      <MultiImageSlider images={multiImage1}  />

      <h2 className="heading">
        Crime movies
      </h2>
      <MultiImageSlider images={multiImage2}  />

      {/* <h3 className="heading">
      Top 10 movies in Pakistan
      </h3>
      <RankingSlider images={multiImage3}  /> */}
    </div>
    </>
  )
}
