import { Table, Typography } from "antd";
import styles from "@/styles/Chart.module.css";

const columns = [
  {
    title: "TANGGAL",
    dataIndex: "tanggal",
    key: "tanggal",
  },
  {
    title: "NO.REFERENSI",
    dataIndex: "noreferensi",
    key: "noreferensi",
  },
  {
    title: "DESKRIPSI",
    dataIndex: "deskripsi",
    key: "deskripsi",
  },
  {
    title: "NILAI",
    dataIndex: "nilai",
    key: "nilai",
  },
];
const data = [
  {
    key: "1",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 30.000.000,00",
  },
  {
    key: "2",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 40.000.000,00",
  },
  {
    key: "3",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 50.000.000,00",
  },
  {
    key: "4",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 60.000.000,00",
  },
  {
    key: "5",
    tanggal: "13-3-2023",
    noreferensi: "GH2001",
    deskripsi: "GENERAL JOURNAL",
    nilai: "Rp 40.000.000,00",
  },
];

const TableJurnal = () => (
  <div
    className='all__chart'
    style={{
      width: "600px",
      height: "400px",
      paddingTop: "7rem",
    }}
  >
    <Typography className={styles.typography}>Jurnal</Typography>
    <Table
      columns={columns}
      dataSource={data}
      style={{
        width: "43rem",
        backgroundColor: "#ffcf00",
      }}
    ></Table>
  </div>
);

export default TableJurnal;
