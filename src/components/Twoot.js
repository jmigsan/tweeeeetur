const Twoot = ({ twootData }) => {
  return (
    <div className="twoot">
      <h3>{twootData.twoothor}</h3>
      <p>{twootData.twootxt}</p>
    </div> 
  )
}

export default Twoot