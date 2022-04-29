const ViewTwoots = ( {twootabase} ) => {
  return (
    <div>
      { twootabase.map (twoot => 
        <div>
          <h3>{twoot.author}</h3>
          <p>{twoot.content}</p>
        </div>  
      )}
    </div>
  )
}

export default ViewTwoots