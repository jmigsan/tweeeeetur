const TwootForm = () => {
  return (
    <div>
      <form action="/">
        <label for="fname">name: </label> <br />
        <input type="text" id="fname" name="fname" value="John Twutter"/>
        <br />
        <br />
        <label for="msg">twoot: </label>
        <br />
        <textarea type="text" id="msg" name="msg" value=""/>
        <br />
        <br />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default TwootForm