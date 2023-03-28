import { useEffect, useState } from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherForecastHour from "./WeatherForecastHour";

const Form = (props) => {


  const [showForecast, setShowForecast] = useState(false);
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);

  useEffect(() => {
    if (showForecast) {
      
    }

    if (showHourlyForecast) {
    }
  }, [showForecast, showHourlyForecast]);

  const handleClick = (e) => {
    e.preventDefault();
    setShowForecast(true);
    setShowHourlyForecast(true);
  };

  const handleClickRefresh = () => {
    window.location.reload();
  };

    return(
      <form className="wrapper weatherForm">
        
      <button onClick={handleClick}>Show forecast</button>
      <button onClick={handleClickRefresh}>Refresh</button>
      {showForecast && <WeatherForecast/>}
      {showHourlyForecast && <WeatherForecastHour />}
        {/* <button type="submit" id="forecastButton">Current Weather</button>
        <button type="submit" id="forecastButtonHour">Current Weather in one hour</button> */}
      </form>
    )
  }
  
  export default Form;