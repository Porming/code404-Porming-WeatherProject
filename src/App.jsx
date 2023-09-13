import './App.css'
import { useState, useEffect } from 'react';
import WeatherTemp from './componets/Weathertemp';
import few_cloud from './images/few_cloud.svg';
import search from './images/search.svg';
import loading from './images/loading.gif';

function App() {
  const [location, setLocation] = useState({});
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState('')

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getWeatherDatas();
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


  return (
    <>
      {!city ? <div className='loading-screen'><img src={loading} alt="loading screen" /></div> :
        <div className='layout'>
          <header>
            <h1>WEATHER</h1>
          </header>
          <div className="inputbox">
            <input type="text" className='input' placeholder='Search' />
            <div className='search-icon'>
              <img src={search} alt="" />
            </div>
          </div>
          <section className='container'>
            <div className='content'>
              {temp.map((data) => {
                return <WeatherTemp
                  city={data.name}
                  weather={data.weather[0].main}
                  tempareture={Math.floor(data.main.temp)}
                  humidity={Math.floor(data.main.humidity)}
                  wind={data.wind.speed}
                  min_temp={Math.floor(data.main.temp_min)}
                  max_temp={Math.floor(data.main.temp_max)}
                />
              })}
              <p className='week-text'>Next 4 Days</p>
              <section className='week-temp'>
                <div className='show-week-temp'>

                  <div className='card-temp'>
                    <div className='card-title'>
                      <p>Monday</p>
                    </div>
                    <div className='icon-small'>
                      <img src={few_cloud} alt="" />
                      <p>Few cloud</p>
                    </div>
                    <div className='temp'>
                      <p>33°</p>
                    </div>
                  </div>


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
