import React,{useState} from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){
    let[loaded, setLoaded]=useState(false);
    let[forecast, setForecast]=useState(null);

    function handleResponse(response){
          console.log(response.data)
          setForecast(response.data)
          setLoaded(true);
    }

   
    if (loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                  <div className ="col">
                    <WeatherForecastDay data={forecast.list[0]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast.list[3]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast.list[11]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast.list[19]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast.list[27]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast.list[35]}/>
                  </div>
                </div>
    
            </div>
        )
      
    }else{
         let apiKey ="93d43dfe3b4a950e5b187e5dc313705e";
        let longitude=props.coordinates.lon;
        let latitude =props.coordinates.lat;
        let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
    
}