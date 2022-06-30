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
        color: "#black",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "Yearly Visits",
      color: "black",
      font: {
        size: 20,
        weight: "lighter",
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "black", beginAtZero: true },
    },
    y: {
      ticks: { color: "black", beginAtZero: true },
    },
    yAxes: [
      {
        gridLines: {
          color: "red",
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
      className="w-5/12 h-full  rounded-xl px-4 bg-zinc-100"
      style={{ width: "49%" }}
    >
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
