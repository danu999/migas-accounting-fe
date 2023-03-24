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

const GrafikArusKas = () => {
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
        label: "Arus Kas - 2023",
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
        tension: 0.3,
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
      }}
    >
      <Typography className={styles.typography}>Grafik Arus Kas</Typography>
      <Line data={data} options={options} />
    </div>
  );
};

export default GrafikArusKas;
