const WeatherForecastHour = (props) => {
    return(
      <div className="weatherDisplayHour">
        Weather in an hour:
        <p>Temperature: <span id="tempId"></span></p>
        <p>Conditions: <span id="conditionsId"></span></p>
        <p>Wind Speed: <span id="windSpeedId"></span></p>
        <p></p>
    </div>
    )
  }
  
  export default WeatherForecastHour;