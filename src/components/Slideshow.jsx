import "../styles/slideshow.scss"
import React, { useState } from "react";

function Slideshow(props) {

  let [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (pictureNumber) => {
    if (pictureNumber === 0 && currentPicture === props.pictures.length - 1) return "slideshowpicture next";
    if (pictureNumber === props.pictures.length - 1 && currentPicture === 0) return "slideshowpicture previous";
    if (pictureNumber === currentPicture) return "slideshowpicture current";
    if (pictureNumber < currentPicture) return "slideshowpicture previous";
    if (pictureNumber > currentPicture) return "slideshowpicture next";
  }

  const nextPicture = () => {
    if (currentPicture === props.pictures.length - 1) {
      setCurrentPicture(0)
    } else {
      setCurrentPicture(currentPicture + 1)
    }
  }

  const previousPicture = () => {
    if (currentPicture === 0) {
      setCurrentPicture(props.pictures.length - 1)
    } else {
      setCurrentPicture(currentPicture - 1)
    }
  }

  return (



    <div className="slideshow">
      {props.pictures.length > 1 ? props.pictures.map((picture, pictureNumber) => (<div key={pictureNumber} className={getClassName(pictureNumber)}><img src={picture} alt="test"></img></div>))
        : <div className="1"><img src={props.cover} alt="test"></img></div>}
      {props.pictures.length > 1 &&
        <div className="chevrons">
          <i className="fa-solid fa-chevron-left" onClick={previousPicture}></i>
          <span className="marquePage">{currentPicture + 1}/{props.pictures.length}</span>
          <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>
        </div>}
    </div>




  )
}



export default Slideshow