import React, { useState } from "react"
import "./css/ImageSlider.css"
import rightArrow from './pictures/rightArrow.png'
import leftArrow from './pictures/leftArrow.png'

function RankingSlider(props) {

    const { images } = props;

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    const prevButton = () => {
      if(currentImageIndex===0){
  
      }
      if (currentImageIndex <= 0) {
        setCurrentImageIndex(images.length - 1)
      } else {
        setCurrentImageIndex(currentImageIndex - 1)
      }
    };
  
    const nextButton = () => {
      if (currentImageIndex >= images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1)
      }
    }

  return (
    <>
         <div className="imageSliderMulti">
        <button className="prevMultiRanking" onClick={prevButton}>
        <img   src={leftArrow} ></img>
        </button>

          <div className="imagesContainerRanking">
            <img className="imgRanking" src={images[currentImageIndex][0]} />
            <img className="imgRanking" src={images[currentImageIndex][1]} />
            <img className="imgRanking" src={images[currentImageIndex][2]} />
            <img className="imgRanking" src={images[currentImageIndex][3]} />
            <img className="imgRanking" src={images[currentImageIndex][4]} />
          </div>

        <button className="nextMultiRanking" onClick={nextButton}>
        <img   src={rightArrow} ></img>
        </button>
      </div>
    </>
  )
}

export default RankingSlider
