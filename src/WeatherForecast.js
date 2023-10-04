import React,{useState,useEffect} from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){
    let[loaded, setLoaded]=useState(false);
    let[forecast, setForecast]=useState(null);

    useEffect(() =>{
        setLoaded(false);
    },([props.coordinates]));


    function handleResponse(response){
          console.log(response.data.daily)
          setForecast(response.data.daily)
          setLoaded(true);
    }

   
    if (loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                  
               
                  <div className ="col">
                    <WeatherForecastDay data={forecast[1]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast[2]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast[3]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast[4]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast[5]}/>
                  </div>
                  <div className ="col">
                    <WeatherForecastDay data={forecast[6]}/>
                  </div>
                </div>
    
            </div>
        )
      
    }else{
         let apiKey ="93d43dfe3b4a950e5b187e5dc313705e";
        let longitude=props.coordinates.lon;
        let latitude =props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
    
}