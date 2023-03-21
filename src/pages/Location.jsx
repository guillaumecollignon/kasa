import "../styles/location.scss"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Accordion from "../components/Accordion.jsx"
import Stars from "../components/Stars.jsx"
import Slideshow from "../components/Slideshow.jsx"

function Location() {


  const { id } = useParams();
  console.log({ id })

  const [selectedFlat, setSelectedFlat] = useState(null)

  useEffect(getLocations, [id])

  function getLocations() {
    fetch("http://localhost:3000/logements.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id);
        setSelectedFlat(flat)
      })
      .catch(console.error)
  }

  if (selectedFlat == null) return <div> please wait...</div>

  const starsArray = [1, 2, 3, 4, 5]


  return (

    <div className="locationPage">
      <Slideshow cover={selectedFlat.cover} pictures={selectedFlat.pictures} />
      <div className="locationHeader">
        <div className="informationLocation">
          <h2 className="locationName">{selectedFlat.title}</h2>
          <h3 className="locationLocalisation">{selectedFlat.location}</h3>
          <div className="tags">
            {selectedFlat.tags.map((tag, index) => (<span key={index} className="tag">{tag}</span>))}
          </div>
        </div>
        <div className="informationHost">
          <div className="host">
            <div className="hostName">{selectedFlat.host.name}</div>
            <img className="hostPicture" src={selectedFlat.host.picture} alt="Une e l'hebergeur"></img>
          </div>
          <div className="stars">
            {starsArray.map((starNumber, index) => (<Stars key={index} number={starNumber} rating={selectedFlat.rating} />))}
          </div>
        </div>
      </div>
      <div className="locationAccordion">
        <div className="slotAccordion">
          <Accordion className="accordion__Description" header="Description" body={selectedFlat.description} />
        </div>
        <div className="slotAccordion">
          <Accordion className="accordion__Equipments" header="Équipements" body={selectedFlat.equipments.map((equipments, index) => (<p key={index} className="equipment">{equipments}</p>))} />
        </div>
      </div>
    </div>
  )
}

export default Location