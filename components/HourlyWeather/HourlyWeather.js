import { useRef } from "react";
import moment from "moment";
import "moment-timezone";
import Image from "next/image";
import styles from "./HourlyWeather.module.scss";

export default function HourlyWeather({ hourlyweather, timezone }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 120;
    } else {
      current.scrollLeft += 120;
    }
  };

  return (
    <div className={styles.hourly}>
      <h3 className={styles.hourly__hourly_title}>Hourly</h3>
      <div className={styles.hourly__inner} ref={scrollRef}>
        {hourlyweather.length > 0 &&
          hourlyweather.map((weather, index) => (
            <div className={styles.hourly__box_wrapper} key={weather.dt}>
              <div className={styles.hourly__box}>
                <span
                  className={`${styles.hourly__time} ${
                    index == 0 ? styles.hourly__time_now : ""
                  }`}
                >
                  {index == 0
                    ? "Now"
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
          ))}
      </div>
      <div className={styles.hourly__more}>
        <button className={styles.hourly__more_left} onClick={() => scroll("left")}>
          &#60;
        </button>
        <button className={styles.hourly__more_right} onClick={() => scroll("right")}>
          &#62;
        </button>
      </div>
    </div>
  );
}
