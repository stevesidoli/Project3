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
      </form>
    )
  }
  
  export default Form;