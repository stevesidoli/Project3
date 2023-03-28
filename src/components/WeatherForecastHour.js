const WeatherForecastHour = (props) => {
    return(
      <div className="weatherDisplayHour">
        <h3>Temperature in an hour</h3>
        <p>{props.futureTemp} degrees celcius</p>
    </div>
    )
  }
  
  export default WeatherForecastHour;