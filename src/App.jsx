import './App.css'
import { useState, useEffect } from 'react';
import WeatherTemp from './componets/CurrentTemp';
import ForecastWeather from './componets/ForecastTemp';
import loading from './images/loading.gif';

import clear_sky_01d from './images/clear_sky_01d.svg';
import clear_sky_01n from './images/clear_sky_01n.svg';
import few_clouds_02d from './images/few_clouds_02d.svg';
import few_clouds_02n from './images/few_clouds_02n.svg';
import clouds_03d from './images/clouds_03d.svg';
import broken_clouds_04d from './images/broken_clouds_04d.svg';
import broken_clouds_04n from './images/broken_clouds_04n.svg';
import shower_rain_09d from './images/shower_rain_09d.svg';
import shower_rain_09n from './images/shower_rain_09n.svg';
import rain_10d from './images/rain_10d.svg';
import rain_10n from './images/rain_10n.svg';
import thunderstorm_11d from './images/thunderstorm_11d.svg';
import thunderstorm_11n from './images/thunderstorm_11n.svg';
import snow_13d from './images/snow_13d.svg';
import snow_13n from './images/snow_13n.svg';
import mist_50d from './images/mist_50d.svg';
import mist_50n from './images/mist_50n.svg';

export const weatherIcons = {
  '01d': clear_sky_01d,
  '01n': clear_sky_01n,
  '02d': few_clouds_02d,
  '02n': few_clouds_02n,
  '03d': clouds_03d,
  '03n': clouds_03d,
  '04d': broken_clouds_04d,
  '04n': broken_clouds_04n,
  '09d': shower_rain_09d,
  '09n': shower_rain_09n,
  '10d': rain_10d,
  '10n': rain_10n,
  '11d': thunderstorm_11d,
  '11n': thunderstorm_11n,
  '13d': snow_13d,
  '13n': snow_13n,
  '50d': mist_50d,
  '50n': mist_50n,
};

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
      alert('Geolocation is not supported by this browser.');
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
