import "../styles/banner.scss"

function Banner(props) {

  return (
    <div className={props.background}>

      <h1 className="slogan">{props.slogan}</h1>

    </div>
  )
}

export default Banner
