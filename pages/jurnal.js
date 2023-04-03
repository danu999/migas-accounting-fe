import { useState, useEffect } from "react";
import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
import { isEmpty } from "lodash";
import axios from "axios";
import Layout from "@/layout/Layout";
import styles from "@/styles/Jurnal.module.css";

const Jurnal = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editRowKey, setEditRowKey] = useState("");
  const [form] = Form.useForm();

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

  console.log("modifiedData", modifiedData);

  const handleDelete = value => {
    const dataSource = [...modifiedData];
    const filteredData = dataSource.filter(item => item.id !== value.id);
    setGridData(filteredData);
  };

  const isEditing = record => record.key === editRowKey;

  const cancel = () => {
    setEditRowKey("");
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...modifiedData];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setGridData(newData);
        setEditRowKey("");
      } else {
        newData.push(row);
        setGridData(newData);
        setEditingKey("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const edit = record => {
    form.setFieldsValue({
      name: "",
      email: "",
      message: "",
      ...record,
    });
    setEditRowKey(record.key);
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
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      editable: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      align: "center",
      editable: false,
    },
    {
      title: "Message",
      dataIndex: "message",
      align: "center",
      editable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return modifiedData.length >= 1 ? (
          <Space>
            <Popconfirm
              disabled={editable}
              title='Are you sure want to delete ?'
              onConfirm={() => handleDelete(record)}
            >
              <Button danger type='primary' disabled={editable}>
                Delete
              </Button>
            </Popconfirm>
            {editable ? (
              <span>
                <Space size='middle'>
                  <Button
                    onClick={() => save(record.key)}
                    type='primary'
                    style={{ marginRight: 8 }}
                  >
                    Save
                  </Button>
                  <Popconfirm title='Are sure to cancel ?' onConfirm={cancel}>
                    <Button>Cancel</Button>
                  </Popconfirm>
                </Space>
              </span>
            ) : (
              <Button onClick={() => edit(record)} type='primary'>
                Edit
              </Button>
            )}
          </Space>
        ) : null;
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    record,
    index,
    children,
    ...restProps
  }) => {
    const input = <Input />;

    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please input some value in ${title} field`,
              },
            ]}
          >
            {input}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Jurnal</h1>
        <Form from={form} component={false}>
          <Table
            columns={mergedColumns}
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            dataSource={modifiedData}
            bordered
            loading={loading}
            style={{
              width: "90rem",
              backgroundColor: "#ffcf00",
              marginTop: "4rem",
            }}
          />
        </Form>
      </div>
    </Layout>
  );
};

export default Jurnal;
