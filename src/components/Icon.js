import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 30%;
  `;
  var icon = "";
  switch (props.condition) {
    case "Clear":
      icon = `./images/clear.jpg`;
      break;
    case "Clouds":
      icon = `./images/cloud.jpg`;
      break;
    case "Haze":
      icon = `./images/haze.jpg`;
      break;
    case "Hail":
      icon = `./images/hail.jpg`;
      break;
    case "Fog":
      icon = `./images/fog.jpg`;
      break;
    case "Tornado":
      icon = `./images/tornado.jpg`;
      break;
    case "Dust":
      icon = `./images/dust.jpg`;
      break;
    case "Mist":
      icon = `./images/mist.jpg`;
      break;
    case "Snow":
      icon = `./images/snow.jpg`;
      break;
    case "Rain":
      icon = `./images/rain.jpg`;
      break;
    case "Drizzle":
      icon = `./images/dizzle.jpg`;
      break;
    case "Thunderstorm":
      icon = `./images/thunderstorm.jpg`;
      break;
    default:
      icon = `./images/clear.jpg`;
      break;
  }
  return <Icon src={icon} alt="Weather icon" />;
};

export default Icon;
