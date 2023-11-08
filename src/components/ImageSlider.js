import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './css/ImageSlider.css'

function ImageSlider(props) {

    

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

   
    setTimeout(() => {
        if (currentImageIndex >= props.images.length - 1) {
            setCurrentImageIndex(0);
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }, 5000);


    return (
        <>
            <div className='imgSliderLink' >
                <div id='image-slider' >
                    {/* <button id="prev" onClick={prevButton} ><i className="fa-solid fa-circle-chevron-left"></i></button> */}
                    <img id="image-container" src={props.images[currentImageIndex]} alt="NFT" />
                    {/* <button id="next" onClick={nextButton} ><i className="fa-solid fa-circle-chevron-right"></i></button> */}
                </div>
            </div>

        </>
    )
}

export default ImageSlider