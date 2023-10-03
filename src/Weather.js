import React, {useState} from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    
    const [weatherData, setWeatherdata] = useState ( {ready: false});
    const [city,setCity] = useState(props.defaultCity);


    function handleResponse(response){
        
        
        setWeatherdata({
          ready:true,
          coordinates: response.data.coord,
          temperature:response.data.main.temp,
          wind:response.data.wind.speed,
          city:response.data.name,
          humidity:response.data.main.humidity,
          description:response.data.weather[0].description,
          icon:response.data.weather[0].icon,
          date:new Date(response.data.dt * 1000),
      })
        
        
    }
   //Search Engine function
   function search(){
         //GET API KEY AND URL
      const apiKey ="ab7ad46dea06f3628a7e54b90f1e4bb5";
      
      let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
   }
    function handleSubmit(event){
        event.preventDefault();
        //search for a city
       search()
    }

    function handleCityChange(event){
      setCity(event.target.value)
    }

    if(weatherData.ready){
                //HTML
        return(
     
       <div className=" container d-flex justify-content-center ">
         <div className="Weather">
         <form onSubmit={handleSubmit}>
              <div className="row">
                   <div className="col-md-9">
                     <input type="search" placeholder="Enter a city" className="form-control" onChange={handleCityChange}/>
                   </div>
                   <div className="col-md-3">
                      <input type="submit" value="Search" className="btn btn-primary w-60"/>
                   </div>
              </div> 
          </form>
          <WeatherInfo data={weatherData}/>
          <WeatherForecast coordinates={weatherData.coordinates}/>
         </div>
          
       </div>
        
        
    
    
      )
    }else{
      search();
      return (
        
        <p>loading...</p>
     );
    }



 
}