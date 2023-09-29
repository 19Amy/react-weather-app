import React, {useState} from "react";

import WeatherInfo from "./WeatherInfo";
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
        <WeatherInfo data={weatherData}/>
        
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