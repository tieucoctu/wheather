import { useRef } from "react";
import moment from "moment-timezone";
import Image from "next/image";
import styles from "./WeeklyWeather.module.scss";

export default function WeeklyWeather({ weeklyWeather, timezone }) {
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
    <div className={styles.weekly}>
      <h3 className={styles.weekly__title}>Daily</h3>
      <div className={styles.weekly__container} ref={scrollRef}>
        {weeklyWeather.length > 0 &&
          weeklyWeather.map((weather, index) => {
            if (index == 0) {
              return;
            }

            return (
              <div className={styles.weekly__card} key={weather.dt}>
                <div className={styles.weekly__inner}>
                  <div className={styles.weekly__center_content}>
                    <div>
                      <h4>
                        {moment.unix(weather.dt).tz(timezone).format("dddd")}
                      </h4>
                      <div className={styles.weekly__icon_wrapper}>
                        <div>
                          <Image
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="weather Icon"
                            layout="fill"
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
            );
          })}
      </div>
      <div className={styles.weekly__more}>
        <button
          className={styles.weekly__more_left}
          onClick={() => scroll("left")}
        >
          &#60;
        </button>
        <button
          className={styles.weekly__more_right}
          onClick={() => scroll("right")}
        >
          &#62;
        </button>
      </div>
    </div>
  );
}
