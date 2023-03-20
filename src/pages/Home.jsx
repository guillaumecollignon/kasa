import "../styles/home.scss"
import Card from "../components/Card.jsx"
import Banner from "../components/Banner.jsx"
import React, { useEffect, useState } from "react";

function Home() {

  const [logements, dataLogement] = useState([]);

  useEffect(getLocations, [])

  function getLocations() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => dataLogement(res))
      .catch(console.error)
  }

  return (

    <div>
      <Banner background="banner home" slogan="Chez vous, partout et ailleurs" />
      <div className="grid">
        {logements.map((cardLogement, index) => (<Card key={`${cardLogement.title}-${index}`} title={cardLogement.title} cover={cardLogement.cover} id={cardLogement.id} />))}
      </div>
    </div>
  )
}

export default Home
