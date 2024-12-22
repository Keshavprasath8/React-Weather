import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import'./Weather.css'

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const[out,setOut]=useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then((response) => {
        setResult(response.data);
        setOut(response.data.main)
        console.log(response)
        console.log(response.data.main);
      })
      .catch((error) => {
        console.error(error);
        setResult("Unable to fetch weather data. Please try again.");
      });
    setCity("");
  };
  
 

  return (
    <div className="container">
        <div className="card" id="card">
          <div className="card-body">
            <h1 className="card-title">Weather App</h1>
            <h2 className="card-title" >Welcome to our Weather App</h2>
            <form onSubmit={submitHandler}>
              <input
              id='input-box'
              className='input-box'
                type="text"
                name="city"
                onChange={(e) => setCity(e.target.value)}
                value={city} placeholder="Enter City"/>
              <br />
              <br />
              <input className='input-button' type="submit" value="Get Weather" />
            </form>
            <br />
            <br />
            <div>
              <h1 className='output'>City Name: {result.name}</h1>
              <h1 className='output'>Temperature: {Math.round((out.temp)-273.15)} °C</h1>
              <h1 className='output'>Humidity: {out.humidity} %</h1>
              <h1 className='output'>Pressure: {out.pressure} Pr</h1>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;



