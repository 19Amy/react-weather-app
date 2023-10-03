import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
          console.log(response.data);
    }

    let apiKey ="93d43dfe3b4a950e5b187e5dc313705e";
    let longitude=props.coordinates.lon;
    let latitude =props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="WeatherForecast">
            <div className="row">
              <div className ="col">
                <div className="WeatherForecast-day"> 
                  Thu  
                </div>
                <WeatherIcon code="10d" size={40} />
               <div className="WeatherForecast-temperature" >
                  <span className="WeatherForecast-temperature-max">
                       19°
                  </span>
                  <span className="WeatherForecast-temperature-min">
                      10°
                  </span>         
               </div>
               
              </div>
            </div>

        </div>
    )
}