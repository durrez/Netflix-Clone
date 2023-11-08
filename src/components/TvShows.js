import React from 'react'
import "../components/css/Home.css";

import slide2 from "./pictures/slide2.jpg";
import whieLines from "./pictures/whiteLines.PNG";
import insideMan from "./pictures/insideMan.PNG";
import innocent from "./pictures/innocent.PNG";
import freud from "./pictures/freud.PNG";
import forest from "./pictures/forest.PNG";
import elitex from "./pictures/elitex.PNG";
import bihindHerEyes from "./pictures/bihindHerEyes.PNG";
import rain from "./pictures/rain.PNG";
import dearChild from "./pictures/dearChild.PNG";
import welcomeToEden from "./pictures/welcomeToEden.PNG";
import marianne from "./pictures/marianne.PNG";
import ferry from "./pictures/ferry.PNG";
import fate from "./pictures/fate.PNG";
import moneyHeistKoria from "./pictures/moneyHeistKoria.PNG";
import delhiCrime from "./pictures/delhiCrime.PNG";
import sweetTooth from "./pictures/sweetTooth.PNG";
import lockedUp from "./pictures/lockedUp.PNG";
import ottoman from "./pictures/ottoman.PNG";
import anne from "./pictures/anne.PNG";
import lostInSpace from "./pictures/lostInSpace.PNG";
import dahmer from "./pictures/dahmer.PNG";
import typeWriter from "./pictures/typeWriter.PNG";
import ghoul from "./pictures/ghoul.PNG";



import MultiImageSlider from './MultiImageSlider';
import ImageSlider from './ImageSlider';






export default function TvShows() {

  const images=[
  slide2, 
  ]

  const multiImage1=[
    [
      whieLines,
      insideMan,
      innocent,
      freud,
      forest,
      elitex
    ],
    [
      bihindHerEyes,
      rain,
      dearChild,
      welcomeToEden,
      marianne,
      ferry,
    ],
    
  ]
  const multiImage2=[
    [
      fate,
      moneyHeistKoria,
      rain,
      delhiCrime,
      sweetTooth,
      lockedUp,
    ],
    [
      ottoman,
      anne,
      lostInSpace,
      dahmer,
      typeWriter,
      ghoul,
    ]
    
  ] 

  return (
    <>
    <ImageSlider images = {images}/>
    <div className='myBody'>
      <h1 className="heading">
        Suspenseful Tv Shows
      </h1>
      <MultiImageSlider images={multiImage1}  />

      <h2 className="heading">
        Only On Netflix
      </h2>
      <MultiImageSlider images={multiImage2}  />

      
    </div>
    </>
  )
}
