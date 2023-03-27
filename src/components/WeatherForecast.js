const WeatherForecast = (props) => {
    return(
      <section className="weatherDisplay">
        <h3>Current Weather</h3>
        <p>Temperature: 
            {props.currentTemp} degrees celcius
            </p>
        </section>
    )
  }
  
  export default WeatherForecast;