import Link from "next/link";
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
          <Link href='/laporanneraca'>
            <Card
              className={styles.card}
              style={{
                boxShadow: "1px 1px 5px 1px #A9A9A9",
                position: "relative",
                background: "linear-gradient(#ffcf07, #e9ff23)",
              }}
            >
              <p className={styles.title}>Laporan Neraca</p>
            </Card>
          </Link>
        </Space>
        <Space direction='horizontal'>
          <Link href='/laporanneracalajur'>
            <Card
              className={styles.card}
              style={{
                boxShadow: "1px 1px 5px 1px #A9A9A9",
                position: "relative",
                background: "linear-gradient(#ffa80f, #fbff13)",
              }}
            >
              <p className={styles.title}>Laporan Neraca Lajur</p>
            </Card>
          </Link>
        </Space>
        <Space direction='horizontal'>
          <Link href='/laporanlabarugi'>
            <Card
              className={styles.card}
              style={{
                boxShadow: "1px 1px 5px 1px #A9A9A9",
                position: "relative",
                background: "linear-gradient(#ffd400, #cfdb20)",
              }}
            >
              <p className={styles.title}>Laporan Laba Rugi</p>
            </Card>
          </Link>
        </Space>
        <Space direction='horizontal'>
          <Link href='/laporansimpanpinjam'>
            <Card
              className={styles.card}
              style={{
                boxShadow: "1px 1px 5px 1px #A9A9A9",
                position: "relative",
                background: "linear-gradient(#ffcf07, #e9ff23)",
              }}
            >
              <p className={styles.title}>Laporan Simpan Pinjam</p>
            </Card>
          </Link>
        </Space>
        <Space direction='horizontal'>
          <Link href='/laporanassets'>
            <Card
              className={styles.card}
              style={{
                boxShadow: "1px 1px 5px 1px #A9A9A9",
                position: "relative",
                background: "linear-gradient(#ffa80f, #fbff13)",
              }}
            >
              <p className={styles.title}>Laporan Assets</p>
            </Card>
          </Link>
        </Space>
        <Space direction='horizontal'>
          <Link href='/laporansubbisnis'>
            <Card
              className={styles.card}
              style={{
                boxShadow: "1px 1px 5px 1px #A9A9A9",
                position: "relative",
                background: "linear-gradient(#ffd400, #cfdb20)",
              }}
            >
              <p className={styles.title}>Laporan Sub Bisnis</p>
            </Card>
          </Link>
        </Space>
      </div>
    </Layout>
  );
};

export default Laporan;
