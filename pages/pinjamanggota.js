import Layout from "@/layout/Layout";
import styles from "@/styles/Simpanpinjam.module.css";
import { DatePicker, Form } from "antd";

const PinjamAnggota = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Input Data Simpan Pinjam Anggota</h1>
        <Form style={{ marginTop: "4rem" }}>
          <Form.Item label='Tanggal Transaksi'>
            <DatePicker
              onChange={onChange}
              format={"DD-MM-YYYY"}
              style={{
                width: 200,
                height: 35,
                marginLeft: 15,
                fontSize: 15,
              }}
            />
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default PinjamAnggota;
