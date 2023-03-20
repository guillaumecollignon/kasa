
import "../styles/stars.scss"
//import React, { useState } from "react";
//import PropTypes from 'prop-types'


function Stars(props) {

  let starColor = "starGrey"
  if (props.number <= props.rating) {
    starColor = "starRed"
  }

  return (
    <div className={starColor} >
      <i className="fa-sharp fa-solid fa-star"></i>
    </div >
  )


}
/*
Card.propTypes = {
  titre: PropTypes.string,
}*/


export default Stars
