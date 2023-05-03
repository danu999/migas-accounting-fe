import Layout from "@/layout/Layout";
import styles from "@/styles/Tambahakun.module.css";
import Link from "next/link";
import {
  Form,
  Input,
  Space,
  Select,
  Button,
  DatePicker,
  Divider,
  Checkbox,
  Typography,
} from "antd";

const TambahAsset = () => {
  const { Option } = Select;
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  const onChecklist = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Penyimpanan Asset Baru</h1>
        <h2 className={styles.asset}>Detail Asset</h2>
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
            <Form.Item label='Tanggal Akuisisi'>
              <DatePicker
                onChange={onChange}
                format={"DD-MM-YYYY"}
                style={{
                  width: 300,
                  height: 35,
                  marginLeft: 15,
                  fontSize: 15,
                }}
              />
            </Form.Item>
            <Form.Item label='Pilih Akun'>
              <Form.Item
                name={["kategoriakun"]}
                style={{
                  width: 300,
                  height: 10,
                  marginLeft: 15,
                  fontSize: 15,
                }}
              >
                <Select placeholder='Pilih'>
                  <Option value='assettetap'>
                    (1-00701) Asset Tetap - Perlengkapan Kantor
                  </Option>
                  <Option value='assetsementara'>
                    (1-00702) Asset Sementara - Perlengkapan Kantor
                  </Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item label='Nama Asset'>
              <Space>
                <Form.Item
                  name='namaasset'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Nama asset tidak boleh kosong",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 300,
                      height: 30,
                      marginLeft: 15,
                      fontSize: 15,
                    }}
                    placeholder='Silahkan Input Nama Asset'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='Nomor Asset'>
              <Space>
                <Form.Item
                  name='nomorasset'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Nomor Asset Tidak Boleh Kosong",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 300,
                      height: 30,
                      marginLeft: 15,
                      fontSize: 15,
                    }}
                    placeholder='Silahkan Input Nomor Asset'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='Biaya Akuisisi'>
              <Space>
                <Form.Item
                  name='biayaakuisisi'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Biaya akuisisi tidak boleh kosong",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 300,
                      height: 30,
                      marginLeft: 15,
                      fontSize: 15,
                    }}
                    placeholder='Silahkan Input Biaya Akuisisi'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='Akun yang dikredit'>
              <Form.Item
                name={["akunkredit"]}
                style={{
                  width: 300,
                  height: 50,
                  marginLeft: 15,
                  fontSize: 15,
                }}
              >
                <Select placeholder='Pilih'>
                  <Option value='kas'>(1011) KAS</Option>
                  <Option value='bri'>(1112) BANK BRI</Option>
                  <Option value='mandiri'>(1113) BANK MANDIRI</Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Divider className={styles.line} />
            <div className={styles.penyusutan}>
              <h2>Penyusutan</h2>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <Typography style={{ marginRight: "16px" }}>
                Asset non-depresiasi :
              </Typography>
              <Checkbox onChange={onChecklist}></Checkbox>
            </div>
            <Form.Item label='Metode'>
              <Form.Item
                name={["metode"]}
                style={{
                  width: 300,
                  height: 10,
                  marginLeft: 15,
                  fontSize: 15,
                }}
              >
                <Select placeholder='Pilih Metode'>
                  <Option value='strightline'>Stright Line</Option>
                  <Option value='doubledecliningbalance'>
                    Double Declining Balance
                  </Option>
                  <Option value='sumoftheyeardigit'>
                    Sum of The Year Digit
                  </Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item label='Masa Manfaat'>
              <Space>
                <Form.Item
                  name='masamanfaat'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Masa Manfaat tidak boleh kosong",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 70,
                      height: 30,
                      marginLeft: 15,
                      fontSize: 15,
                      marginRight: 10,
                    }}
                    type='number'
                  />
                  Tahun
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='Nilai/Tahun'>
              <Space>
                <Form.Item
                  name='nilai/tahun'
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Nilai/Tahun tidak boleh kosong",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 70,
                      height: 30,
                      marginLeft: 15,
                      fontSize: 15,
                      marginRight: 10,
                    }}
                  />
                  Persen
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
