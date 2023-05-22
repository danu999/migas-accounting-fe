import styles from "@/styles/Login.module.css";
import { Button, Form, Input, Card, Typography } from "antd";
import Image from "next/image";
import bg from "@/public/bg2.jpg";
const onFinish = values => {
  console.log("Success:", values);
};
const onFinishFailed = errorInfo => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <div
      className={styles.login}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        className={styles.card}
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src='/logo.png'
          width={250}
          height={250}
          alt='Logo Picture'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5.5rem",
          }}
        ></Image>
        <Typography
          className={styles.typography}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            fontSize: "20px",
          }}
        >
          Sistem Akuntansi
        </Typography>
        <Typography
          className={styles.typography}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          Koperasi Primadaya Migas
        </Typography>
        <Form
          className={styles.form}
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 20,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
