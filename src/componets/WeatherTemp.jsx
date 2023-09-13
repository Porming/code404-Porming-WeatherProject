import React from 'react';
import few_cloud from '../images/few_cloud.svg';
import clear_sky from '../images/clear_sky.svg';
import cloud from '../images/cloud.svg';
import rain from '../images/rain.svg';
import snow from '../images/snow.svg';
import wind from '../images/wind.svg';
import thunderstorm from '../images/thunderstorm.svg'
import broken_cloud from '../images/broken_cloud.svg';

const weatherIcons = {
    'Clouds': few_cloud,
    'Clear': clear_sky,
    'Scattered Clouds': cloud,
    'Rain': rain,
    'Snow': snow,
    'Mist': wind,
    'Thunderstorm': thunderstorm,
    'Drizzle': broken_cloud,
};

export default function WeatherTemp({city, weather, tempareture, humidity, wind, min_temp, max_temp}) {
    let today = new Date();
    let todayFormatted = today.toLocaleString('en-US', {weekday: 'long'});

    return (
        <>
            <section className='temp-detail'>
                <div className='show-day'>
                    <p className='day'>{todayFormatted}</p>
                    <p className='location'>Today in <span className='city'>{city} </span></p>
                </div>

                <div className='weather-icon-large'>
                    <img className='icon-large' src={weatherIcons[weather]} alt={weather} />
                    <p>{weather}</p>
                </div>

                <div className='show-temp-detail'>
                    <div className='show-temp'>
                        <p className='tempareture'>{tempareture}°</p>
                    </div>
                    <div className='data-temp'>
                        <div className='side-data-temp'>
                            <p>Humidity <span className='humidity'>{humidity}%</span></p>
                            <p>wind <span className='wind'> {wind}km/h</span></p>
                        </div>
                        <div className='side-data-temp'>
                            <p>Min temp <span className='min-temp'>{min_temp}°</span></p>
                            <p>Max temp <span className='max-temp'>{max_temp}°</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
