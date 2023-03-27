const Form = (props) => {


    

    return(
      <form className="wrapper weatherForm">
        <button type="submit" id="forecastButton">Current Weather</button>
        <button type="submit" id="forecastButtonHour">Current Weather in one hour</button>
    </form>
    )
  }
  
  export default Form;