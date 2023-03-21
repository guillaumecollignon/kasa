import { Link } from 'react-router-dom'
import "../styles/card.scss"

function Card(props) {

  return (

    <Link to={`/Location/${props.id}`} className="card">
      <h3 className="titleCard">{props.title}</h3>
      <img className="imgCard" src={props.cover} alt="eaffa"></img>
    </Link >
  )
}

export default Card
