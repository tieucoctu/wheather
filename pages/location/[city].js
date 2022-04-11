import react from "react";
import cities from "../../lib/city/city.list.json";
import moment from "moment-timezone";
import Link from "next/link";
import Head from "next/head";

import SearchBox from "../../components/SearchBox/SearchBox";
import HourlyWeather from "../../components/HourlyWeather/HourlyWeather";
import TodayWeather from "../../components/TodayWeather/TodayWeather";
import WeeklyWeather from "../../components/WeeklyWeather/WeeklyWeather";

import dynamic from "next/dynamic";
const Maps = dynamic(() => import("../../components/Maps/Maps"), {
  ssr: false,
});

export async function getServerSideProps(context) {
  const city = getCityId(context.params.city);
  if (!city) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&exclude=minutely&appid=${process.env.API_KEY}&units=metric`
  );

  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  const hourlyWeather = data.hourly;
  const current = data.current;
  const weeklyWeather = data.daily;
  const timezone = data.timezone;
  const weather = data.current.weather;
  if (!data.current.rain) {
    data.current.rain = 0;
  }

  if (!data.current.snow) {
    data.current.snow = 0;
  }
  return {
    props: {
      current: current,
      timezone: timezone,
      city: city,
      hourlyweather: hourlyWeather,
      weeklyWeather: weeklyWeather,
      weather: weather,
    },
  };
}

const getCityId = (param) => {
  const cityParam = param.trim();
  const splitCity = cityParam.split("-");
  const id = splitCity[splitCity.length - 1];

  if (!id) {
    return null;
  }

  const city = cities.find((city) => city.id.toString() == id);

  if (city) {
    return city;
  } else {
    return null;
  }
};

// const getHourlyWeather = (hourlyData, timezone) => {

//   const todaysData = hourlyData.filter((data) => data.dt );
//   console.log(todaysData)
//   return todaysData;
// };

export default function Weather({ ...props }) {
  return (
    <>
      <Head>
        <title>Weather - Next Weather App</title>
      </Head>
      <div className="page-wrapper">
        <div className="container">
          <Link href="/">
            <a className="back-link">&larr; Home</a>
          </Link>
          <SearchBox placeholder="Search for another location..." />
          <TodayWeather
            city={props.city}
            timezone={props.timezone}
            current={props.current}
            weather={props.weather}
          />
          <HourlyWeather
            hourlyweather={props.hourlyweather}
            timezone={props.timezone}
          />
          <WeeklyWeather
            weeklyWeather={props.weeklyWeather}
            timezone={props.timezone}
          />
        </div>
        {/* <>
          <div>
            <Maps />
          </div>
        </> */}
      </div>
    </>
  );
}
