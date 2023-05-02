import Layout from "@/layout/Layout";
import styles from "@/styles/Buatakun.module.css";
import Link from "next/link";
import { Form, Input, Space, Select, Button } from "antd";

const TambahAsset = () => {
  const { Option } = Select;
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Penyimpanan Asset Baru</h1>
        <div className={styles.form}>
          <Form
            name='complex-form'
            onFinish={onFinish}
            labelCol={{
              span: 3,
            }}
            wrapperCol={{
              span: 10,
            }}
            style={{
              maxWidth: 1000,
            }}
          >
            <Form.Item label='Kode Akun'>
              <Space>
                <Form.Item
                  name='kodeakun'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Kode akun tidak boleh kosong",
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
                    placeholder='Silahkan Input Kode Akun'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='Nama Akun'>
              <Space>
                <Form.Item
                  name='namaakun'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Nama akun tidak boleh kosong",
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
                    placeholder='Silahkan Input Nama Akun'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='Kategori Akun'>
              <Form.Item
                name={["kategoriakun"]}
                style={{
                  width: 300,
                  height: 50,
                  marginLeft: 15,
                  fontSize: 15,
                }}
              >
                <Select placeholder='Pilih Kategori'>
                  <Option value='activalancar'>ACTIVA LANCAR</Option>
                  <Option value='kewajiban'>KEWAJIBAN</Option>
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
              <Link href='/assets'>
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
                Buat Asset
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default TambahAsset;
