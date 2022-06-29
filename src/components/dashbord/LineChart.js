import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#e2e6e9",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "Yearly Visits",
      color: "white",
      font: {
        size: 20,
        weight: "lighter",
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#e2e6e9", beginAtZero: true },
    },
    y: {
      ticks: { color: "#e2e6e9", beginAtZero: true },
    },
    yAxes: [
      {
        gridLines: {
          color: "red",
        },
      },
    ],
    xAxes: [
      {
        id: "x-axis-0",
        ticks: {
          fontColor: "green",
        },
        gridLines: {
          color: "green",
          zeroLineColor: "green",
        },
      },
    ],
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Visit Counts",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#ff7913",
      backgroundColor: "#ff7913",
      labelColor: "blue",
    },
  ],
};

const LineChart = () => {
  return (
    <div
      className="w-5/12 h-full  rounded-xl px-4 bg-zinc-900"
      style={{ width: "49%" }}
    >
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
