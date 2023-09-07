import React from "react";
import "./Weather.css";

export default function Weather(){
  return(
    <div className="Weather">
        
        <form>
            <div className="row">
                 <div className="col-md-9">
                   <input type="search" placeholder="Enter a city" className="form-control"/>
                 </div>
                 <div className="col-md-3">
                    <input type="submit" value="Search" className="btn btn-primary w-60"/>
                 </div>
            </div> 
        </form>

        <h1 className="left-align">New York</h1>
        <ul>
            <li className="left-align">Wednesday 07:00</li>
            <li className="left-align">Mostly cloudy</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              <div className="row img-row">
                <div className="col-3">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="sunny" className="weather-img"/>
                </div>
                <div className="col-3 units-section">
                  <span className="temperature">6</span> 
                  <span className="units"> °C </span>
                </div>
              </div>
               
                
               
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 2%</li>
                    <li>Humidity: 2%</li>
                    <li>Wind: 2km/hr</li>
                </ul>
            </div>
            
        </div>
    </div>
    
  )
}