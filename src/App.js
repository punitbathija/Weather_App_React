import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/Forecast/Forecast";
import main from "./main.png";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const fetchCurrentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const fetchForecastWeather = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([fetchCurrentWeather, fetchForecastWeather]).then(
      async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecastWeather({ city: searchData.label, ...forecastRes });
      }
    );
    console.log(forecastWeather);
  };
  return (
    <div className="container py-2">
      <Navbar />
      <Search onSearchChange={handleOnSearchChange} />
      {!currentWeather && (
        <img src={main} alt=" illustration" className="main" />
      )}
      {!currentWeather && (
        <h3 className="para">
          Search in the field above to see something intresting...
        </h3>
      )}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
