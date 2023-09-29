import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    
    const [weatherData, setWeatherdata] = useState ( {ready: false});


    function handleResponse(response){
        
        console.log(response.data);
        setWeatherdata({
          ready:true,
          temperature:response.data.main.temp,
          wind:response.data.wind.speed,
          city:response.data.name,
          humidity:response.data.main.humidity,
          description:response.data.weather[0].description,
          iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
          date:new Date(response.data.dt * 1000),
      })
        
        
    }

    if(weatherData.ready){
                //HTML
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

        <h1 className="left-align">{weatherData.city}</h1>
        <ul>
            <li className="left-align">
              < FormattedDate data={weatherData.date}/>
            </li>
            <li className="left-align">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-3">
              <div className="row img-row">
                <div className="col-6">
                   <img src={weatherData.iconUrl} alt={weatherData.description} className="weather-img"/>
                </div>
                <div className="col-6 units-section">
                  <span className="temperature">{Math.round(weatherData.temperature)}</span> 
                  <span className="units"> °C </span>
                </div>
              </div>
               
                
               
            </div>
            <div className="col-6 weather-details">
                <ul>
                    
                    <li>Humidity:{weatherData.humidity}</li>
                    <li>Wind: {weatherData.wind}</li>
                </ul>
            </div>
            
        </div>
    </div>
    
      )
    }else{
        //GET API KEY AND URL
      const apiKey ="ab7ad46dea06f3628a7e54b90f1e4bb5";
      
      let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return (
        <p>loading...</p>
     );
    }



 
}