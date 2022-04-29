import Twoot from "./Twoot"

const ViewTwoots = ( {twootabase} ) => {
  return (
    <div>
      { twootabase.map (twoot =>
        <Twoot twootData={twoot} />
      )}
    </div>
  )
}

export default ViewTwoots