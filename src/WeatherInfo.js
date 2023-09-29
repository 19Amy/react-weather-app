import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1 className="left-align">{props.data.city}</h1>
        <ul>
            <li className="left-align">
              < FormattedDate data={props.data.date}/>
            </li>
            <li className="left-align">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-3">
              <div className="row img-row">
                <div className="col-6">
                   <img src={props.data.iconUrl} alt={props.data.description} className="weather-img"/>
                </div>
                <div className="col-6 units-section">
                  <span className="temperature">{Math.round(props.data.temperature)}</span> 
                  <span className="units"> °C </span>
                </div>
              </div>
               
                
               
            </div>
            <div className="col-6 weather-details">
                <ul>
                    
                    <li>Humidity:{props.data.humidity}</li>
                    <li>Wind: {props.data.wind}</li>
                </ul>
            </div>
            
        </div>
        </div>
    )
}