import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Typography } from "antd";
import styles from "@/styles/Chart.module.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const GrafikLabarugi = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Laba Rugi - 2023",
        data: [
          2000000, 3000000, 2500000, 4000000, 3500000, 6000000, 4000000,
          3000000, 4100000, 3000000, 4000000, 3000000,
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    elements: {
      point: {
        radius: 6,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#ffcf00",
      },
      line: {
        tension: 0.4,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#ffcf00",
        fill: true,
      },
    },
  };

  return (
    <div
      className='all__chart'
      style={{
        width: "600px",
        height: "400px",
        paddingTop: "7rem",
        marginLeft: "3rem",
      }}
    >
      <Typography className={styles.typography}>Grafik Laba Rugi</Typography>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default GrafikLabarugi;
