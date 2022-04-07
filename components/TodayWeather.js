import moment from "moment-timezone";
import React from "react";
import Image from "next/image";

export default function TodayWeather({...props}){
   
    return(
        <div className="today">
            <div className="today__inner">
                <div className="today__center-content">
                    <h1>
                        {props.city.name}({props.city.country})
                    </h1>
                    <h2>
                        <span>{props.current.temp.toFixed(0)}&deg;</span>&#67;
                        
                    </h2>
                </div>
                
                <div className="today__right-content">
                    {props.weather.length >0 &&
                    props.weather.map((image,index) =>(
                        <><div  className="today__icon-wrapper">
                            <div>
                                    
                                <Image
                                    
                                    src={`https://openweathermap.org/img/wn/${image.icon}@2x.png`}
                                    alt="Weather Icon"
                                    layout="fill" 
                                    key={index}/>
                            </div>
                        </div>
                        <h3 key={index}>{image.description}</h3></>
                    ))                        
                    }
                      
                </div>
            </div>
            <div className="today__update-times">
                <div>
                    Updated as of <span>
                        {moment.unix(props.current.dt).tz(props.timezone).format("LT")}
                    </span>
                </div>  
            </div>
            <div className="today__condition">
                <div className="today__condition-current">
                    
                    <div className="today__condition-humidity">Humidity: <span >{props.current.humidity}%</span>
                    </div>
                    <div className="today__condition-pressure">
                    Pressure: <span >{props.current.pressure}hPa</span>
                    </div>
                    <div className="today__condition-uvi">
                            UV index: <span >{props.current.uvi}</span>Extreme
                    </div>
                    <div className="today__condition-wind_speed">
                        Wind speed: <span >{props.current.wind_speed} m/s</span>
                    </div><div className="today__condition-visibility">
                        Visibility: <span >{props.current.visibility} km</span>
                    </div>
                    <div className="today__condition-rain">
                        Rain: <span >{props.current.rain} mm</span>
                    </div>
                    <div className="today__condition-snow">
                           Snow: <span >{props.current.snow} mm</span> 
                    </div>
                </div>
                        
            </div>
        </div>
    )
}