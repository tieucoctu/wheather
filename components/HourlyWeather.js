import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import Image from 'next/image'

export default function HourlyWeather({hourlyweather, timezone}){
   return(
       <div className='hourly'>
           <div className='hourly__inner'>
               {hourlyweather.length >0 &&
                hourlyweather.map((weather, index) =>(
                    <div className='hourly__box-wrapper' key={weather.dt}>
                        <div className='hourly__box'>
                            <span className={`hourly__time ${index == 0 ? 'hourly__time-now':'' }`}>
                                {index ==0 ? "Now" 
                                : moment.unix(weather.dt).tz(timezone).format("LT")}
                            </span>
                            <Image
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                                width="100"
                                height="100"
                            />
                            <span>{weather.temp.toFixed(0)}&deg;C</span>
                        </div>
                    </div>
                ))
               }
           </div>
           
       </div>
   )
}