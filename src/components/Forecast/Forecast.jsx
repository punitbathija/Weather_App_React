import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion";

import "./Forecast.css";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title py-3">Forecast</label>
      <Accordion allowZeroExpanded className="bod container">
        {data.list.splice(0, 7).map((item, ind) => (
          <AccordionItem key={ind}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="box">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.svg`}
                  />
                  <div className="forecastDetails">
                    <label className="day">
                      <b>{forecastDays[ind]}</b>
                    </label>
                    <br />
                    <label>
                      <p>{item.weather[0].description}</p>
                    </label>
                    <label>
                      <p>Temperature: {item.main.temp}°C</p>
                    </label>
                    <label>
                      <p>Humidity: {item.main.humidity}%</p>
                    </label>
                    <label>
                      <p>Min Temperature: {item.main.temp_min}°C</p>
                    </label>
                    <label>
                      <p>Max Temperature: {item.main.temp_max}°C</p>
                    </label>
                  </div>
                  <hr />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
