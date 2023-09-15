import './App.css'
import { useState, useEffect } from 'react';
import WeatherTemp from './componets/Weathertemp';
import ForecastWeather from './componets/ForecastWeather';
import loading from './images/loading.gif';

function App() {
  const [location, setLocation] = useState({});
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState('')
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getWeatherDatas();
      getForecastDatas();
    }
  }, [location])

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      })
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const getWeatherDatas = async () => {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=Metric&appid=0d9feb068d8c074ba5949982c8f24443`);
    const weatherData = await weatherResponse.json();
    const cityName = weatherData.name;
    setCity(cityName)
    setTemp([weatherData])
  };

  const getForecastDatas = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=Metric&appid=0d9feb068d8c074ba5949982c8f24443`);
    const data = await response.json();
    const forecastEachDay = []
    for (let i = 1; i < 5; i++) {
      const day = { 'day': data.list[8 * i].dt_txt, 'temp': data.list[8 * i].main.temp, 'weather': data.list[8 * i].weather[0].description, 'icon': data.list[8 * i].weather[0].icon }
      forecastEachDay.push(day)
    }
    setForecastData(forecastEachDay);
  };


  return (
    <>
      {!city ? <div className='loading-screen'>
        <img src={loading} alt="loading screen" />
        <p>Loading Data...</p>
        </div> :
        <div className='layout'>
          <header>
            <h1>WEATHER APP</h1>
          </header>
          <section className='container'>
            <div className='content'>
              {temp.map((data) => {
                return <WeatherTemp
                  key={Math.random()*10**3}
                  city={data.name}
                  weather={data.weather[0].description}
                  tempareture={Math.floor(data.main.temp)}
                  humidity={Math.floor(data.main.humidity)}
                  wind={data.wind.speed}
                  min_temp={Math.floor(data.main.temp_min)}
                  max_temp={Math.floor(data.main.temp_max)}
                  icon={data.weather[0].icon}
                />
              })}
              <p className='week-text'>Next 4 Days</p>
              <section className='week-temp'>
                <div className='show-week-temp'>
                  {forecastData.map((data) => {
                    return <ForecastWeather
                      key={Math.random()*10**3}
                      day={new Date(data.day).toLocaleString('en-US', { weekday: 'long' })}
                      tempareture={Math.floor(data.temp)}
                      weather={data.weather}
                      icon={data.icon}
                    />
                  })}
                </div>
              </section>
            </div>

          </section>
        </div>
      }
    </>
  )
}

export default App
