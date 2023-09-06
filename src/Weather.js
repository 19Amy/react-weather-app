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
                    <input type="submit" value="Search" className="btn btn-primary"/>
                 </div>
            </div> 
        </form>

        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="sunny"/>
                6°C
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