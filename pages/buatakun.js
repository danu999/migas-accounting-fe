import Layout from "@/layout/Layout";
import styles from "@/styles/Buatakun.module.css";
import { Form, Input, Space, Select } from "antd";

const BuatAkun = () => {
  const { Option } = Select;
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Buat Akun Baru</h1>
        <Form
          name='complex-form'
          onFinish={onFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
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
                    message: "Code account is required",
                  },
                ]}
              >
                <Input
                  style={{
                    width: 160,
                  }}
                  placeholder='Please input kode akun'
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
                    message: "Name Account is required",
                  },
                ]}
              >
                <Input
                  style={{
                    width: 160,
                  }}
                  placeholder='Please input nama akun'
                />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label='Kategori'>
            <Form.Item name={["kategori"]} noStyle>
              <Select placeholder='Select Kategori'>
                <Option value='activalancar'>ACTIVA LANCAR</Option>
                <Option value='kewajiban'>KEWAJIBAN</Option>
              </Select>
            </Form.Item>
          </Form.Item>
          <Form.Item label='Saldo Awal'>
            <Space>
              <Form.Item
                name='saldo'
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Name Account is required",
                  },
                ]}
              >
                <Input
                  style={{
                    width: 160,
                  }}
                  placeholder='Please Input Saldo Awal'
                />
              </Form.Item>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default BuatAkun;
