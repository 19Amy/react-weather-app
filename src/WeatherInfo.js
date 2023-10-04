import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1 className="left-align">{props.data.city}</h1>
        <ul>
            <li className="left-align">
              < FormattedDate data={props.data.date}/>
            </li>
            <li className="left-align weather-description">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-7">
              <div className="row img-row">
                <div className="col-4 img-component" >
                  {/**Weather image component in line below*/}
                  <WeatherIcon code={props.data.icon} size={60} />
                  
                </div>
                <div className="col-8 units-section">
                  <WeatherTemperature celsius={props.data.temperature}/>
                  
                </div>
              </div>
               
                
               
            </div>
            <div className="col-5 weather-details">
                <ul>
                    
                    <li className="wind-humidity">Humidity:{props.data.humidity}%</li>
                    <li className="wind-humidity">Wind: {props.data.wind}km/hr</li>
                </ul>
            </div>
            
        </div>
        </div>
    )
}