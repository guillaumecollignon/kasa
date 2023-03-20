import { Link } from 'react-router-dom'
import "../styles/error.scss"

function Error() {
  return (
    <div className='error'>
      <h2 className='error404'>404</h2>
      <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="backLink" to="/">Retourner à la page d'acceuil</Link>
    </div>
  )
}

export default Error
