import { Link } from 'react-router-dom'
import "../styles/header.scss"

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo1.svg" alt="KASA"></img>
      </div>
      <nav className='nav'>
        <Link to="/">Acceuil</Link>
        <Link to="/About">À propos</Link>
      </nav>




    </div>
  )
}

export default Header
