const WeatherForecast = (props) => {
    return(
      <div className="weatherDisplay">
        <h3>Current Temperature</h3>
        <p>{props.currentTemp} degrees celcius</p>
        </div>
    )
  }
  
  export default WeatherForecast;