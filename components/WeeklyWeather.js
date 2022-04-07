import React from 'react'
import moment from "moment-timezone";
import Image from "next/image"

export default function WeeklyWeather({weeklyWeather, timezone}) {
    
  return (
    <div className='weekly'>
        <h3 className='weekly__title'>
            Daily
        </h3>
        <div className='weekly__container'>
            {weeklyWeather.length >0 &&
            weeklyWeather.map((weather, index) =>{
                if(index == 0){
                    return ;
                }

                return(
                    <div className='weekly__card' key={weather.dt}>
                        <div className='weekly__inner'>
                            <div className='weekly__center-content'>
                                <div>
                                    <h4>
                                        {moment.unix(weather.dt).tz(timezone).format("dddd")}
                                    </h4>
                                    <div className='weekly__icon-wrapper'>
                                        <div>
                                            <Image 
                                            
                                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                            alt ="weather Icon"
                                            layout='fill'
                                            />
                                        </div>
                                    </div>
                                    <h4>
                                        <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                                        <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                                    </h4>
                                    <h5>{weather.weather[0].description}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    </div>
  )
}
