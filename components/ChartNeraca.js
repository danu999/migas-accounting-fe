import React from "react";
import { Bar } from "react-chartjs-2";
import { Typography } from "antd";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "@/styles/Chart.module.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const GrafikBalok = () => {
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
        label: "Neraca - 2023",
        data: [30, 40, 30, 45, 25, 30, 25, 35, 50, 30, 40, 60],
        backgroundColor: "#4c4e4e",
        borderColor: "#ffcf00",
        borderWidth: 2,
      },
    ],
  };
  const options = {};

  return (
    <div
      className='all__chart'
      style={{
        width: "600px",
        height: "400px",
        paddingTop: "7rem",
      }}
    >
      <Typography className={styles.typography}>Grafik Neraca</Typography>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GrafikBalok;
