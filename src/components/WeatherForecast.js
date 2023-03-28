const WeatherForecast = (props) => {
    return(
      <section className="weatherDisplay">
        <h3>Current Temperature</h3>
        <p>{props.currentTemp} degrees celcius</p>
        </section>
    )
  }
  
  export default WeatherForecast;