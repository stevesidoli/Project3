const WeatherForecast = (props) => {
    return(
      <section className="weatherDisplay">
        Current Weather:
        <p>Temperature: <span id="tempId"></span></p>
        <p>Conditions: <span id="conditionsId"></span></p>
        <p>Wind Speed: <span id="windSpeedId"></span></p>
        <p></p>

        </section>
    )
  }
  
  export default WeatherForecast;