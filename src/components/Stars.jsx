
import "../styles/stars.scss"

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

export default Stars
