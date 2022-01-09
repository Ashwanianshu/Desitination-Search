import './index.css'

const DestinationItem = props => {
  const {eachItem} = props
  const {imgUrl, name} = eachItem
  return (
    <li className="card-container">
      <img alt={name} className="img" src={imgUrl} />
      <p className="content">{name}</p>
    </li>
  )
}
export default DestinationItem
