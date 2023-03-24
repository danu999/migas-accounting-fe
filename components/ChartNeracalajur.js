import React from "react";
import { Line } from "react-chartjs-2";
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

const GrafikNeracaLajur = () => {
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
        label: "Neraca Lajur - 2023",
        data: [65, 59, 80, 81, 56, 55, 40, 44, 66, 55, 44, 77],
        backgroundColor: "#4c4e4e",
        borderColor: "#ffcf00",
        borderWidth: 2,
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
        tension: 0.2,
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
      <Typography className={styles.typography}>Grafik Neraca Lajur</Typography>
      <Line data={data} options={options} />
    </div>
  );
};

export default GrafikNeracaLajur;
