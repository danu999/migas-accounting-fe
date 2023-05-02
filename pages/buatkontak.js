import Layout from "@/layout/Layout";
import styles from "@/styles/Buatakun.module.css";
import Link from "next/link";
import { Form, Input, Space, Select, Button, InputNumber } from "antd";

const BuatKontak = () => {
  const { Option } = Select;
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Buat Kontak Baru</h1>
        <div className={styles.form}>
          <Form
            name='complex-form'
            onFinish={onFinish}
            labelCol={{
              span: 3,
            }}
            wrapperCol={{
              span: 20,
            }}
            style={{
              maxWidth: 1000,
            }}
          >
            <Form.Item label='Nama Kontak'>
              <Space>
                <Form.Item
                  name='namakontak'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Nama kontak tidak boleh kosong",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 300,
                      height: 35,
                      marginLeft: 15,
                      fontSize: 15,
                    }}
                    placeholder='Silahkan Input Nama Kontak'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='No. Handphone'>
              <Space>
                <Form.Item
                  name='nomorhandphone'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Nomor handphone tidak boleh kosong",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 300,
                      height: 35,
                      marginLeft: 15,
                      fontSize: 15,
                    }}
                    placeholder='Silahkan Input Nomor Handphone'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='Kategori Kontak'>
              <Form.Item
                name={["kategorikontak"]}
                style={{
                  width: 300,
                  height: 50,
                  marginLeft: 15,
                  fontSize: 15,
                }}
              >
                <Select placeholder='Pilih Kategori'>
                  <Option value='anggota'>ANGGOTA</Option>
                  <Option value='usaha'>USAHA</Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item label='Saldo Awal'>
              <Space>
                <Form.Item
                  name='saldo'
                  rules={[
                    {
                      required: true,
                      message: "Saldo Awal Tidak Boleh Kosong",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 300,
                      height: 35,
                      marginLeft: 15,
                      fontSize: 15,
                    }}
                    placeholder='Silahkan Input Saldo Awal'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label=' ' colon={false}>
              <Link href='/datakontak'>
                <Button
                  danger
                  type='primary'
                  style={{
                    marginRight: "1.5rem",
                    color: "black",
                    marginLeft: "2rem",
                  }}
                >
                  Batal
                </Button>
              </Link>
              <Button
                type='primary'
                htmlType='submit'
                style={{
                  backgroundColor: "#ffcf00",
                  color: "black",
                }}
              >
                Buat Kontak
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default BuatKontak;
