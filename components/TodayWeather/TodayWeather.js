import moment from "moment-timezone";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import styles from './TodayWeather.module.scss'

export default function TodayWeather({ ...props }) {
  const condition = [
    {
      name: "Humidity",
      dv: "%",
      class: "today__condition-humidity",
      api: props.current.humidity,
    },
    {
      name: "Pressure",
      dv: "hPa",
      api: props.current.pressure,
      class: "today__condition-pressure",
    },
    {
      name: "UV index",
      dv: "Extreme",
      api: props.current.uvi,
      class: "today__condition-uvi",
    },
    {
      name: "Wind speed",
      dv: "m/s",
      api: props.current.wind_speed,
      class: "today__condition-wind_speed",
    },
    {
      name: "Visibility",
      dv: "km",
      api: props.current.visibility,
      class: "today__condition-visibility",
    },
    {
      name: "Rain",
      dv: "mm",
      api: props.current.rain,
      class: "today__condition-rain",
    },
    {
      name: "Snow",
      dv: "mm",
      api: props.current.snow,
      class: "today__condition-snow",
    },
  ];

  return (
    <div className={styles.today}>
      <div className={styles.today__inner}>
        <div className={styles.today__center_content}>
          <h1>
            {props.city.name}
          </h1>
          <h2>
            <span>{props.current.temp.toFixed(0)}&deg;</span>&#67;
          </h2>
        </div>

        <div className={styles.today__right_content}>
          {props.weather.length > 0 &&
            props.weather.map((image, index) => (
              <>
                <div className={styles.today__icon_wrapper}>
                  <div>
                    <Image
                      src={`https://openweathermap.org/img/wn/${image.icon}@2x.png`}
                      alt="Weather Icon"
                      layout="fill"
                      key={image.id}
                    />
                  </div>
                </div>
                <h3 key={index}>{image.description}</h3>
              </>
            ))}
        </div>
      </div>
      <div className={styles.today__update_times}>
        <div>
          Updated as of{" "}
          <span>
            {moment.unix(props.current.dt).tz(props.timezone).format("LT")}
          </span>
        </div>
      </div>
      <div className={styles.today__condition}>
        <div className={styles.today__condition_current}>
          {condition.length > 0 &&
            condition.map((condi, index) => (
              <>
                <Fragment>
                  <div className={condi.class} key={condi.name}>
                    {condi.name}:{" "}
                    <span>
                      {condi.api}
                      {condi.dv}
                    </span>
                  </div>
                </Fragment>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
