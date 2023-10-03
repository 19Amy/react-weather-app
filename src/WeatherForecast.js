import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast(){
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