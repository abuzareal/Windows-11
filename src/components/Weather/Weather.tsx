import { useEffect, useState } from "react";
import "./Weather.scss";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState<Data | null>(null);
  const [location, setLocation] = useState("Nashik");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=146f21d5dd7e67d75fc1ffbbcbe370ba`;

  useEffect(() => {
    const weather = () => {
      axios.get(url).then((response) => {
        setData(response.data);
      });
    };
    weather();
  }, [location]);

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
      <h3>Weather</h3>
      <hr />
      {data?.name !== undefined && (
        <div className="weather-data">
          <p>
            {data.name}, {data.sys ? data.sys.country : null}
          </p>
          <p>{data.weather[0].main}</p>
          <p>
            {data.main.temp}, {data.main.pressure}, {data.main.humidity}
          </p>
          <p>
            {data.sys.sunrise}, {data.sys.sunset}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
