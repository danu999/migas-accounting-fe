import Layout from "@/layout/Layout";
import styles from "@/styles/Simpanpinjam.module.css";
import Link from "next/link";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { DatePicker, Form, Button, Input, Space, Select } from "antd";

const Bayarpinjamusaha = () => {
  const { Option } = Select;
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = values => {
    console.log({ values });
  };

  const initialFields = [...Array(5)].map((_, index) => ({ key: index }));

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Simpan Pinjam Usaha</h1>
        <h2 className={styles.bayarpinjamusaha}>Input Bayar Pinjam Usaha</h2>
        <Form onFinish={onFinish} style={{ marginTop: "4rem", width: 1000 }}>
          <Form.Item name={"tanggaltransaksi"} label='Tanggal Transaksi'>
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
          <Form.List name={"nama"} initialValue={initialFields}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => {
                  return (
                    <Space key={field.key} direction='horizontal' size={30}>
                      <Form.Item
                        name={[field.name, "nama"]}
                        label={`${index + 1} . Nama`}
                        style={{ width: 300 }}
                      >
                        <Input placeholder='Nama' />
                      </Form.Item>
                      <Form.Item
                        name={[field.name, "deskripsi"]}
                        label={"Deskripsi :"}
                        style={{ width: 300 }}
                      >
                        <Input placeholder='Deskripsi' />
                      </Form.Item>
                      <Form.Item
                        name={[field.name, "jumlah"]}
                        label={"Jumlah :"}
                        style={{ width: 300 }}
                      >
                        <Input placeholder='Jumlah' />
                      </Form.Item>
                      <Form.Item
                        name={[field.name, "transferdari"]}
                        label={"Transfer Dari :"}
                        style={{
                          width: 320,
                        }}
                      >
                        <Select placeholder='Pilih'>
                          <Option value='bri'>1012 - BRI</Option>
                          <Option value='mandiri'>1013 - MANDIRI</Option>
                          <Option value='cash'>1000 - CASH</Option>
                        </Select>
                      </Form.Item>
                      <DeleteOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                        style={{
                          color: "red",
                          fontSize: "25px",
                          marginBottom: "22px",
                        }}
                      />
                    </Space>
                  );
                })}
                <Form.Item style={{ width: 133 }}>
                  <Button
                    icon={<PlusOutlined />}
                    block
                    onClick={() => {
                      add();
                    }}
                    style={{ backgroundColor: "#ffcf00", color: "black" }}
                  >
                    Tambah Data
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item label=' ' colon={false}>
            <Link href='/simpanpinjam'>
              <Button
                danger
                type='primary'
                style={{
                  color: "black",
                  marginLeft: "70rem",
                  position: "absolute",
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
                marginLeft: "75rem",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default Bayarpinjamusaha;
