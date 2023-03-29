import WeatherForecast from './WeatherForecast.js';
import WeatherForecastHour from './WeatherForecastHour.js';

// Step 1: Import the Axios library into the WeatherInfo component, along with the useState, useEffect and useRef hooks.

import { useState } from "react";
import axios from "axios";



const WeatherInfo = () => {

//     const [globalCurrentTemp, setGlobalCurrentTemp] = useState(0);
    
    const [currentTemp, setCurrentTemp] = useState(0);

    const [futureTemp, setFutureTemp] = useState(0);

    // Step 2: Use Axios to fetch data from openweathermap.org and console log so I can see how the data is structured.
    
    axios({
        // define the url endpoint and the relevant parameters
        url: 'https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=-79.42&hourly=temperature_2m,relativehumidity_2m&daily=precipitation_probability_max&current_weather=true&forecast_days=1&timezone=America%2FNew_York'
        
        })
        .then((apiData) =>{
            

    // Step 3: Leave API data for now. Use the Date(), getHours(), getMinutes() and getSeconds() constructors to get the current date/time. Make a variable called "time" to hold that data.

            let today = new Date();

            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            
    // Step 4: Turn the data in the "time" variable into an array, as it is a string by default. Create a variable named "currHour" to store only the current hour data.
            
           
            const timeSplit = time.split("");

            const currHour = parseInt(timeSplit[0] + timeSplit[1]);

    // Step 5: Use the "+" operator to add 1 hour to the current hour. Store that info in a variable called "futureHour".
 

            const futureHour = currHour + 1;

        
            const tempHour = apiData.data.hourly.temperature_2m;

           setFutureTemp(tempHour[futureHour]);


    // Step 6: create a variable called currentTemp which contains the current toronto Temperature as stored in the API.    

            setCurrentTemp(apiData.data.current_weather.temperature);
  

    })

        return (
            <>    
                <section className="resultsSection">
                <WeatherForecast
                currentTemp={currentTemp}
                />
                <WeatherForecastHour 
                futureTemp={futureTemp}
                />
                </section>
            </>


        )
}


export default WeatherInfo;
