import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";
const Condition = ({ temp, condition }) => {
  return (
    <>
      <div style={{ fontSize: "2rem" }}>
        <Reel theme={reelStyle} text={`${temp} °C`} />
      </div>

      <WeatherState>{condition}</WeatherState>
    </>
  );
};

export default Condition;

const WeatherState = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.2rem;
`;
const reelStyle = {
  reel: {
    height: "1.07em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    lineHeight: "0,97em",
    justifyContent: "center",
  },
  group: {
    transitionDelay: "0",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0,0)",
    height: "1.5em",
  },
  number: {
    height: "1em",
    fontFamily: "Fira Sans",
  },
};
