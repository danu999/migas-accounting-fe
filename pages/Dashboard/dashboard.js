import React from "react";
import Image from "next/image";
import Layout from "@/layout/Layout";
import styles from "@/styles/Dashboard.module.css";
import Chartlabarugi from "@/components/ChartLabarugi.js";
import Chartneraca from "@/components/ChartNeraca.js";
import { Card, Space, Statistic, Col, Row } from "antd";
import {
  ArrowUpOutlined,
  MoreOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <Space direction='horizontal'>
          <Card
            className={styles.card}
            style={{
              boxShadow: "2px 3px 15px 3px #A9A9A9",
              position: "relative",
            }}
          >
            <MoreOutlined
              style={{
                marginLeft: "16rem",
                fontSize: "1.5rem",
                position: "absolute",
              }}
            />
            <CreditCardOutlined
              style={{
                color: "#ffcf00",
                fontSize: "2.5rem",
                position: "absolute",
                top: "1.7rem",
                left: "1.7rem",
              }}
            />
            <p className={styles.kas}>KAS</p>
            <Statistic
              title='Total Saldo'
              value={"Rp. 6.000.000,00"}
              valueStyle={{ position: "absolute" }}
            />
            <Row gutter={1}>
              <Col span={1}>
                <Statistic
                  value={1.5}
                  valueStyle={{
                    color: "#0c4900",
                    fontSize: "13px",
                    display: "flex",
                    position: "absolute",
                    top: "0.7rem",
                    left: "14rem",
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix='%'
                />
              </Col>
            </Row>
          </Card>
        </Space>
        <Space direction='horizontal'>
          <Card
            className={styles.card}
            style={{
              boxShadow: "2px 3px 15px 3px #A9A9A9",
              position: "relative",
            }}
          >
            <MoreOutlined
              style={{
                marginLeft: "16rem",
                fontSize: "1.5rem",
                position: "absolute",
              }}
            />
            <Image
              width={50}
              height={40}
              className={styles.cardbri__logo}
              src='/bri.jpg'
              alt='logo'
              position='absolute'
              style={{
                boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
              }}
            />
            <Statistic
              title='Total Saldo'
              value={"Rp. 8.000.000,00"}
              valueStyle={{ position: "absolute" }}
            />
            <Row gutter={1}>
              <Col span={1}>
                <Statistic
                  value={3.5}
                  valueStyle={{
                    color: "#0c4900",
                    fontSize: "13px",
                    display: "flex",
                    position: "absolute",
                    top: "0.7rem",
                    left: "14rem",
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix='%'
                />
              </Col>
            </Row>
          </Card>
        </Space>
        <Space direction='horizontal'>
          <Card
            className={styles.card}
            style={{
              boxShadow: "2px 3px 15px 3px #A9A9A9",
              position: "relative",
            }}
          >
            <MoreOutlined
              style={{
                marginLeft: "16rem",
                fontSize: "1.5rem",
                position: "absolute",
              }}
            />
            <Image
              width={50}
              height={40}
              className={styles.cardmandiri__logo}
              src='/mandiri.png'
              alt='logo'
              position='absolute'
              style={{
                boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
              }}
            />
            <Statistic
              title='Total Saldo'
              value={"Rp. 9.000.000,00"}
              valueStyle={{ position: "absolute" }}
            />
            <Row gutter={1}>
              <Col span={1}>
                <Statistic
                  value={2.5}
                  valueStyle={{
                    color: "#0c4900",
                    fontSize: "13px",
                    display: "flex",
                    position: "absolute",
                    top: "0.7rem",
                    left: "14rem",
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix='%'
                />
              </Col>
            </Row>
          </Card>
        </Space>
      </div>
      <Chartlabarugi />
      <Chartneraca />
    </Layout>
  );
};

export default Dashboard;
