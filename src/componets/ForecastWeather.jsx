import React from 'react';
import {weatherIcons} from './WeatherIcon'

export default function ForecastWeather({ day, tempareture, weather, icon }) {
    return (
        <>
            <div className='card-temp'>
                <div className='card-title'>
                    <p>{day}</p>
                </div>
                <div className='icon-small'>
                    <img src={weatherIcons[icon]} alt="" />
                    <p>{weather}</p>
                </div>
                <div className='temp'>
                    <p>{tempareture}°</p>
                </div>
            </div>
        </>
    )
}
