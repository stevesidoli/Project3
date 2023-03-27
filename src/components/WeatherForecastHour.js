const WeatherForecastHour = (props) => {
    return(
      <div className="weatherDisplayHour">
        <h3>Weather in an hour</h3>
        <p>Temperature: {props.futureTemp} degrees celcius</p>
    </div>
    )
  }
  
  export default WeatherForecastHour;