import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import styled from "@emotion/styled";
import PulseLoader from "react-spinners/PulseLoader";

const WeatherEngine = ({ location }) => {
  const WeatherEngine = styled.div`
    display: flex;
  `;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });
  const getWeather = async (q) => {
    setLoading(true);
    try {
      const apiResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=ace3c22408da14b65893c98b72c8667d&units=metric`
      );
      const restJson = await apiResponse.json();
      //return restJson; //return promise
      setWeather({
        temp: restJson.main.temp,
        city: restJson.name,
        condition: restJson.weather[0].main,
        country: restJson.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);
  if (error) {
    return (
      <div style={{ color: "black" }}>
        There has been error!<button onClick={setError(false)}>Reset!</button>
      </div>
    );
  }
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <PulseLoader size={15} color="purple" />
      </div>
    );
  }
  return (
    <WeatherEngine>
      <WeatherCard
        city={weather.city}
        country={weather.country}
        temp={weather.temp}
        condition={weather.condition}
        getWeather={getWeather}
      />
    </WeatherEngine>
  );
};

export default WeatherEngine;
