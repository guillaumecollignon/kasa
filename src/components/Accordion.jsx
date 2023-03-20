import "../styles/accordion.scss"
import React, { useState } from "react";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false)

  const switchStat = () => {
    setIsOpen(!isOpen)
  }
  const classNameBody = "accordionBody" + (isOpen ? " open" : " close");
  return (
    <div className="accordion">
      <div className="accordionHeader" onClick={switchStat}><span>{props.header}</span>{isOpen ? <i className="fa-sharp fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</div>
      <div className={classNameBody}>{props.body}</div>
    </div>
  )
}

export default Accordion
