import React from 'react'
import "../components/css/Body.css";
import theBoneCollector from "./pictures/theBoneCollector.PNG"
import infinits from "./pictures/infinits.PNG"
import reptile from "./pictures/reptile.PNG"
import preacher from "./pictures/preacher.PNG"
import nowhere from "./pictures/nowhere.PNG"
import choona from "./pictures/choona.PNG"
import bazar from "./pictures/bazar.PNG"
import itefaq from "./pictures/itefaq.PNG"
import okJannu from "./pictures/okJannu.PNG"
import theBody from "./pictures/theBody.PNG"
import drishyam from "./pictures/drishyam.PNG"
import thar from "./pictures/thar.PNG"
import khufiya from "./pictures/khufiya.PNG"
import omg from "./pictures/omg.PNG"
import nowhere1 from "./pictures/nowhere1.PNG"
import fairPlay from "./pictures/fairPlay.PNG"
import infinits1 from "./pictures/infinits1.PNG"

export default function Body() {
  return (
    <div className='myBody'>
      <h1 className="heading1">
        New Releases
      </h1>
      <div className='newReleases'>
      <img className='movie1' src={theBoneCollector} />
      <img className='movie2' src={infinits} />
      <img className="movie3" src={reptile} />
      <img className='movie4' src={preacher} />
      <img className='movie5' src={nowhere} />
      <img className='movie6' src={choona} />
      </div>
      <h1 className="heading2">
        indianMovies
      </h1>
      <div className="indianMovies">
          <img className='movie7'src={bazar} />
          <img className='movie8'src={itefaq} />
          <img className='movie9'src={okJannu} />
          <img className='movie10'src={theBody} />
          <img className="movie11"src={drishyam} />
          <img className="movie12"src={thar} />
      </div>
      <h1 className="heading3">
        top 10 movies in Pakistan
      </h1>
      <div className="moviesPakistan">
          <img className='movie13'src={khufiya} />
          <img className='movie14'src={omg} />
          <img className='movie15'src={nowhere1} />
          <img className='movie16'src={fairPlay} />
          <img className="movie17"src={infinits1} />
      </div>
    </div>
  )
}
