import { useState, useEffect, useRef } from "react";
import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";
import axios from "axios";
import Layout from "@/layout/Layout";
import styles from "@/styles/Jurnal.module.css";
import Highlighter from "react-highlight-words";

const Jurnal = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editRowKey, setEditRowKey] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [form] = Form.useForm();
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={e => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{
              width: 30,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 50,
            }}
          >
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffcf00",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axios.get(
      "http://localhost:3005/datamaster/journal"
    );
    // console.log(response);
    setGridData(response.data);
    setLoading(false);
  };

  // const handleDelete = async key => {
  //   try {
  //     const response = await axios.delete(
  //       `http://192.168.254.113:8000/api/journals/${key}`
  //     );

  //     if (response.status === 200) {
  //       message.success("Delete Success!");
  //       setGridData(data.filter(item => item.key !== key));
  //     } else {
  //       message.error("Delete Failed!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleDelete = value => {
  //   const dataSource = [...gridData];
  //   const filteredData = dataSource.filter(item => item.id !== value.id);
  //   setGridData(filteredData);
  // };

  const isEditing = record => record.key === editRowKey;

  const cancel = () => {
    setEditRowKey("");
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...gridData];
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
      no: "",
      date: "",
      description: "",
      value: "",
      ...record,
    });
    setEditRowKey(record.key);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      ...getColumnSearchProps("id"),
    },
    {
      title: "No. Referensi",
      dataIndex: "no",
      align: "center",
      editable: true,
      ...getColumnSearchProps("no"),
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      align: "center",
      editable: true,
      ...getColumnSearchProps("date"),
    },
    {
      title: "Deskripsi",
      dataIndex: "description",
      align: "center",
      editable: true,
      ...getColumnSearchProps("description"),
    },
    {
      title: "Nilai",
      dataIndex: "value",
      align: "center",
      editable: true,
      ...getColumnSearchProps("value"),
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return gridData.length >= 1 ? (
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
            dataSource={gridData}
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
