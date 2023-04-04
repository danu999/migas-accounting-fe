import Layout from "@/layout/Layout";
import styles from "@/styles/Laporan.module.css";
import { Card, Typography, Space } from "antd";

const Laporan = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Laporan</h1>
        <Typography className={styles.typography}>Pilih Laporan</Typography>
        <Space direction='horizontal'>
          <Card
            className={styles.card}
            style={{
              boxShadow: "1px 1px 5px 1px #A9A9A9",
              position: "relative",
            }}
          ></Card>
        </Space>
        <Space direction='horizontal'>
          <Card
            className={styles.card}
            style={{
              boxShadow: "1px 1px 5px 1px #A9A9A9",
              position: "relative",
            }}
          ></Card>
        </Space>
        <Space direction='horizontal'>
          <Card
            className={styles.card}
            style={{
              boxShadow: "1px 1px 5px 1px #A9A9A9",
              position: "relative",
            }}
          ></Card>
        </Space>
      </div>
    </Layout>
  );
};

export default Laporan;
