import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

const Form = (props) => {

// Use useState to create a state variable called ShowForecast with it's boolean value set to false

  const [showForecast, setShowForecast] = useState(false); 

  // useEffect(() => {
  //   if (showForecast) {
      
  //   }

  // }, [showForecast]);

// Create two functions, handleClick and handleClickRefresh, with true and false boolean values for the showforecast state variable, respectively. These functions show and hide the WeatherInfo component.  Add the preventDefault method to ensure the buttons do not refresh the page on click.

  const handleClick = (e) => {
    e.preventDefault();
    setShowForecast(true);
    
  };

  const handleClickRefresh = (e) => {
    e.preventDefault();
    setShowForecast(false);
  };

// In the return method, create a form with two buttons, one calling the handleClick function when clicked, and the other calling the handleClickRefresh function when clicked.
// handleClick displays the WeatherInfo component, and handleClickRefresh hides it.

    return(
      <form className="wrapper weatherForm">
        <button onClick={handleClick}>Show forecast</button>
        <button onClick={handleClickRefresh}>Hide forecast</button>
        {showForecast && <WeatherInfo />}
      </form>
    )
  }
  
  export default Form;