import { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

const Form = (props) => {


  const [showForecast, setShowForecast] = useState(false);
  

  useEffect(() => {
    if (showForecast) {
      
    }

  }, [showForecast]);

  const handleClick = (e) => {
    e.preventDefault();
    setShowForecast(true);
    
  };

  const handleClickRefresh = (e) => {
    e.preventDefault();
    setShowForecast(false);
  };

    return(
      <form className="wrapper weatherForm">
        
      <button onClick={handleClick}>Show forecast</button>
      <button onClick={handleClickRefresh}>Hide forecast</button>
      {showForecast && <WeatherInfo />}
      {/* {showHourlyForecast && <WeatherForecastHour />} */}
        {/* <button type="submit" id="forecastButton">Current Weather</button>
        <button type="submit" id="forecastButtonHour">Current Weather in one hour</button> */}
      </form>
    )
  }
  
  export default Form;