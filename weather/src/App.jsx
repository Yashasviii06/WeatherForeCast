import "./App.css";
import {useEffect, useState} from "react";
const App=()=>{
const [city, setCity]=useState("");
const [search,setSearch]=useState("");

useEffect(()=>{
  const fetchApi = async()=>{
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f344c00e1af70b16cb80576fb7b83eed`;
    const response= await fetch(url);
    
    const resJson =await response.json();
    // console.log(resJson);
     setCity(resJson);
  };
  fetchApi();
},[search])

  return(
    <div className="bg">
      <div className="container">
        <div className="search">
        <input type="search" 
            className="inpt"
            value={search}
            onChange={(event)=>{
              setSearch(event.target.value)   }} />
        </div>

        {!city.name ? (<p>no data found.</p>):(
          <>
              <div className="heading">
                <h1 className="location">{city.name}  </h1>
                <i className="fas fa-street-view"></i>
              </div>
            <div className="temp">
                <h2>{city.main.temp} Celsius</h2>
              </div>
              <div className="details">
                <p>Min : {city.main.temp_min} Celsius | Max : {city.main.temp_max} Celsius</p>
              </div>
          
              <div className="deco wave1"></div>
              <div className="deco wave2"></div>
              <div className="deco wave3"></div>
          </>)}
      </div>
    </div>
  )
}
export default App;