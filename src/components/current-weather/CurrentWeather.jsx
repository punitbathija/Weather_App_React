import React from "react";
import "./CurrentWeather.css";
import wind from "./wind.svg";
import humidity from "./thermometer.svg";
function CurrentWeather({ data }) {
  return (
    <div className="container my-5 ">
      <div className="imgData">
        <h3>
          <b>{data.city}</b>
        </h3>
        <img
          src={`icons/${data.weather[0].icon}.svg`}
          alt="weather"
          style={{ maxWidth: "150px" }}
        />
        <p className="font px-3">
          <b>{data.main.temp}°C</b>
        </p>
        <h4>{data.weather[0].description}</h4>
        <div className="details">
          <hr />
          <small>Fells like {data.main.feels_like}</small>
          <br />
          <small>
            <img src={wind} className="wind" alt="humidity" />
            Wind : {data.wind.speed} km/h
          </small>
          <br />
          <small>
            <img src={humidity} className="wind" alt="humidity" />
            Humidity: {data.main.humidity}%
          </small>
          <br />
          <small>Temprature Min: {data.main.temp_min}°C</small>
          <br />
          <small>Temprature Max: {data.main.temp_max}°C</small>
          <br />
          <small>Air Pressure: {data.main.pressure} Milibars</small>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default CurrentWeather;
