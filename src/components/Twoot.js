const Twoot = ({ twootData }) => {
  return (
    <div className="twoot">
      <h3>{twootData.author}</h3>
      <p>{twootData.content}</p>
    </div> 
  )
}

export default Twoot