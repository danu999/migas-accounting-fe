import Layout from "@/layout/Layout";
import styles from "@/styles/Laporan.module.css";
import { DatePicker, Typography } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  } else {
    console.log("Clear");
  }
};

const rangePresets = [
  {
    label: "Last 7 Days",
    value: [dayjs().add(-7, "d"), dayjs()],
  },
  {
    label: "Last 14 Days",
    value: [dayjs().add(-14, "d"), dayjs()],
  },
  {
    label: "Last 30 Days",
    value: [dayjs().add(-30, "d"), dayjs()],
  },
  {
    label: "Last 90 Days",
    value: [dayjs().add(-90, "d"), dayjs()],
  },
];

const LaporanSubBisnis = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Laporan Sub Bisnis</h1>
        <Typography style={{ marginTop: "4rem", marginLeft: "6px" }}>
          Pilih Tanggal
        </Typography>
        <RangePicker
          className={styles.date}
          presets={rangePresets}
          format='DD/MM/YYYY'
          onChange={onRangeChange}
        />
      </div>
    </Layout>
  );
};

export default LaporanSubBisnis;
