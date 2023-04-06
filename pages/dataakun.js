import Layout from "@/layout/Layout";
import Link from "next/link";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import styles from "@/styles/Dataakun.module.css";
import Highlighter from "react-highlight-words";

const data = [
  {
    key: "1",
    kodeakun: 1010,
    namaakun: "ACTIVA LANCAR",
    kategoriakun: "ACTIVA LANCAR",
    saldo: "5.000.000.000,00",
  },
  {
    key: "2",
    kodeakun: 1010,
    namaakun: "ACTIVA LANCAR",
    kategoriakun: "ACTIVA LANCAR",
    saldo: "6.000.000.000,00",
  },
  {
    key: "3",
    kodeakun: 1012,
    namaakun: "BANK MANDIRI",
    kategoriakun: "KEWAJIBAN",
    saldo: "7.000.000.000,00",
  },
  {
    key: "4",
    kodeakun: 2010,
    namaakun: "KAS",
    kategoriakun: "KEWAJIBAN",
    saldo: "8.000.000.000,00",
  },
  {
    key: "5",
    kodeakun: 2011,
    namaakun: "BANK BRI",
    kategoriakun: "KEWAJIBAN",
    saldo: "9.000.000.000,00",
  },
  {
    key: "6",
    kodeakun: 1010,
    namaakun: "ACTIVA LANCAR",
    kategoriakun: "ACTIVA LANCAR",
    saldo: "10.000.000.000,00",
  },
];

const DataAkun = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
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
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 90,
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
            backgroundColor: "#ffc069",
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
  const columns = [
    {
      title: "Kode Akun",
      dataIndex: "kodeakun",
      key: "kodeakun",
      width: "20%",
      ...getColumnSearchProps("kodeakun"),
    },
    {
      title: "Nama Akun",
      dataIndex: "namaakun",
      key: "namaakun",
      width: "20%",
      ...getColumnSearchProps("namaakun"),
    },
    {
      title: "Kategori Akun",
      dataIndex: "kategoriakun",
      key: "kategoriakun",
      width: "20%",
      ...getColumnSearchProps("kategoriakun"),
    },
    {
      title: "Saldo",
      dataIndex: "saldo",
      key: "saldo",
      width: "30%",
      ...getColumnSearchProps("saldo"),
      sorter: (a, b) => a.saldo.length - b.saldo.length,
      sortDirections: ["descend", "ascend"],
    },
  ];
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Data Akun</h1>
        <div className={styles.button}>
          <Link href='/buatakun'>
            <Button
              style={{
                backgroundColor: "#ffcf00",
                marginTop: "4rem",
                marginBottom: "3rem",
              }}
            >
              Buat Akun Baru
            </Button>
          </Link>
          <Table
            columns={columns}
            dataSource={data}
            style={{
              backgroundColor: "#ffcf00",
              color: "#ffcf00",
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default DataAkun;
