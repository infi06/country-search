// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="list-container">
      <div className="cart">
        <img className="img" src={imgUrl} alt={name} />
        <p className="para">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
