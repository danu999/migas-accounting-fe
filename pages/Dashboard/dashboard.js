import Layout from "@/layout/Layout";
import React from "react";
import styles from "@/styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Dashboard</h1>
      </div>
    </Layout>
  );
};

export default Dashboard;
