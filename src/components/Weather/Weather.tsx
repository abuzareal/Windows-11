import { useEffect, useState } from "react";
import "./Weather.scss";
import axios from "axios";
import { MdOutlineLocationOn } from "react-icons/md";
import { WiSunrise, WiSunset } from "react-icons/wi";

const Weather = () => {
  const [data, setData] = useState<Data | null>(null);
  const [location, setLocation] = useState("Pune");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=146f21d5dd7e67d75fc1ffbbcbe370ba`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location]);

  const getFormattedTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sunriseTime = data ? getFormattedTime(data.sys.sunrise) : null;
  const sunsetTime = data ? getFormattedTime(data.sys.sunset) : null;

  type Data = {
    name: string;
    weather: [{ main: string }];
    main: {
      temp: number;
      pressure: number;
      humidity: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
      country: string;
    };
  };

  return (
    <div className="weather">
      {data?.name && (
        <div className="weather-data">
          <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
          <h3 className="main">{data.weather[0].main}</h3>
          <br />
          <MdOutlineLocationOn />
          <span className="location">
            {data.name}, {data.sys ? data.sys.country : null}
          </span>
          <br />
          {/* <span className="">
            Pressure: {data.main.pressure}
            <br />
            Humidity: {data.main.humidity}
            <br />
          </span> */}
          <WiSunrise size={18} /> {sunriseTime}
          <span className="sun">
            <WiSunset size={18} /> {sunsetTime}
          </span>
        </div>
      )}
    </div>
  );
};

export default Weather;
