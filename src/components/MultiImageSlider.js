import React, { useState } from "react"
import "./css/ImageSlider.css"
import rightArrow from './pictures/rightArrow.png'
import leftArrow from './pictures/leftArrow.png'

function MultiImageSlider(props) {

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
        <button className="prevMulti" onClick={prevButton}>
          <img   src={leftArrow} ></img>
        </button>

          <div className="imagesContainerMulti">
            <img className="imgMulti" src={images[currentImageIndex][0]} />
            <img className="imgMulti" src={images[currentImageIndex][1]} />
            <img className="imgMulti" src={images[currentImageIndex][2]} />
            <img className="imgMulti" src={images[currentImageIndex][3]} />
            <img className="imgMulti" src={images[currentImageIndex][4]} />
            <img className="imgMulti" src={images[currentImageIndex][5]} />
          </div>

        <button className="nextMulti" onClick={nextButton}>
        <img   src={rightArrow} ></img>
        </button>
      </div>
    </>
  );
}

export default MultiImageSlider;
