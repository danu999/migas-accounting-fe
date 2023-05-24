import styles from "@/styles/Login.module.css";
import { Form, Input, Card, Typography } from "antd";
import { useSidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import bg from "@/public/bg2.jpg";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn, login } = useSidebarContext();

  // Redirect to main page if user is already logged in

  const onFinish = values => {
    const { username, password } = values;
    const user = {
      username: "onta",
      password: "onta",
    };

    if (username === user.username && password === user.password) {
      localStorage.setItem("isLoggedIn", true);
      login();
      router.push("/");
    } else {
      console.log("Login failed");
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

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
          alignItems: "center",
        }}
      >
        <Image
          src='/logo.png'
          width={250}
          height={250}
          alt='Logo Picture'
          style={{
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        ></Image>
        <Typography
          className={styles.typography}
          style={{
            fontSize: "30px",
            textShadow:
              "0.5px 0.5px 0 black, -0.5px -0.5px 0 black, 0.5px -0.5px 0 black, -0.5px 0.5px 0 black",
          }}
        >
          Sistem Akuntansi
        </Typography>
        <Typography
          className={styles.typography}
          style={{
            fontSize: "30px",
            textShadow:
              "0.5px 0.5px 0 black, -0.5px -0.5px 0 black, 0.5px -0.5px 0 black, -0.5px 0.5px 0 black",
            marginBottom: "2rem",
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
            width: 350,
            marginRight: "6.5rem",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder='Enter Your username' />
          </Form.Item>
          <Form.Item
            label='Password'
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder='Enter Your password' />
          </Form.Item>
          <button className={styles.buttonsignup}>Sign Up</button>
          <Card className={styles.linecard}></Card>
          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 20,
            }}
          >
            <button className={styles.buttonlogin}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
