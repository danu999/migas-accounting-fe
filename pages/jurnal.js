import { useState, useEffect } from "react";
import { Table, Popconfirm, Button } from "antd";
import { isEmpty } from "lodash";
import axios from "axios";
import Layout from "@/layout/Layout";
import styles from "@/styles/Jurnal.module.css";

const Jurnal = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setGridData(response.data);
    setLoading(false);
  };

  const dataWithAge = gridData.map(item => ({
    ...item,
    age: Math.floor(Math.random() * 6) + 20,
  }));

  const modifiedData = dataWithAge.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
    message: isEmpty(body) ? item.message : body,
  }));

  const handleDelete = value => {
    const dataSource = [...modifiedData];
    const filteredData = dataSource.filter(item => item.id !== value.id);
    setGridData(filteredData);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      editTable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      editTable: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      align: "center",
      editTable: false,
    },
    {
      title: "Message",
      dataIndex: "message",
      align: "center",
      editTable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_, record) =>
        modifiedData.length >= 1 ? (
          <Popconfirm
            title='Are you sure want to delete ?'
            onConfirm={() => handleDelete(record)}
          >
            <Button danger type='primary'>
              Delete
            </Button>
          </Popconfirm>
        ) : null,
    },
  ];

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Jurnal</h1>
        <Table
          columns={columns}
          dataSource={modifiedData}
          bordered
          loading={loading}
          style={{
            width: "90rem",
            backgroundColor: "#ffcf00",
            marginTop: "4rem",
          }}
        />
      </div>
    </Layout>
  );
};

export default Jurnal;
