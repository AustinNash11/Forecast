import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import Results from './component/Results';
import Search from './component/Search';
function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = 'f694eb08be72d957916b675bda407825';


  const fetchWeather = useCallback(async () =>{
    if (!city) return;
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  useEffect(()=>{
    if(city){
      fetchWeather();
    }
  }, [fetchWeather]);
  
  console.log(weatherData);

return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Weather Forecast</h1>
        <Search setCity = {setCity}/>
        <Results weatherData = {weatherData}/>
      </div>
    </div>
  );
}

export default App;
