import Layout from "@/layout/Layout";
import styles from "@/styles/Simpanpinjam.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Button, Input, Space } from "antd";

const PinjamAnggota = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = values => {
    console.log({ values });
  };

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Input Data Simpan Pinjam Anggota</h1>
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
          <Form.List name={"nama"}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => {
                  return (
                    <Space key={field.key} direction='horizontal' size={30}>
                      <Form.Item
                        name={[field.name, "nama"]}
                        label={`${index + 1} . Nama`}
                      >
                        <Input placeholder='Nama' />
                      </Form.Item>
                      <Form.Item name={[field.name, "deskripsi"]}>
                        <Input placeholder='Deskripsi' />
                      </Form.Item>
                      <Form.Item name={[field.name, "jumlah"]}>
                        <Input placeholder='Jumlah' />
                      </Form.Item>
                      <Form.Item name={[field.name, "transferdari"]}>
                        <Input placeholder='Transfer Dari' />
                      </Form.Item>
                    </Space>
                  );
                })}
                <Form.Item style={{ width: 150 }}>
                  <Button
                    icon={<PlusOutlined />}
                    type='dashed'
                    block
                    onClick={() => {
                      add();
                    }}
                  >
                    Add Data
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </Layout>
  );
};

export default PinjamAnggota;
