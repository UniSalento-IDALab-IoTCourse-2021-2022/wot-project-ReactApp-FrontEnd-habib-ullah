import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { fetchDailyData } from "../ChartData";
import moment from "moment";

export const Charts = () => {
  const [dailyData, setDailyData] = useState([]);
  const fetchApi = async () => {
    const dailyData = await fetchDailyData();
    setDailyData(dailyData);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  
  const lineChart = dailyData ? (
    <Line
      data={{
        labels: dailyData.map((content) =>
          moment(content.created).format("LT")
        ),
        datasets: [
          {
            data: dailyData.map(({ content }) => content.air_pressure),
            label: "Air Pressure",
            borderColor: "rgb(0, 217, 255)",
            fill: false,
          },
          {
            data: dailyData.map(({ content }) => content.humidity),
            label: "Humidity",
            borderColor: "rgb(255, 165, 0)",
            fill: false,
          },
          {
            data: dailyData.map(({ content }) => content.light),
            label: "Light",
            borderColor: "rgb(7, 89, 230, 0.55)",
            fill: false,
          },
          {
            data: dailyData.map(({ content }) => content.ambient_temp),
            label: "Ambient Temp",
            borderColor: "rgb(250, 0, 33, 1)",
            fill: false,
          },
        ],
      }}
    />
  ) : (
    "Data is not Avaiable"
  );

  return (
    <div>
      <div>{lineChart}</div>
    </div>
  );
};
