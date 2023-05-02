import Layout from "@/layout/Layout";
import Link from "next/link";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag } from "antd";
import styles from "@/styles/Datakontak.module.css";
import Highlighter from "react-highlight-words";

const data = [
  {
    key: "1",
    tanggalakuisisi: "01-05-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "100.000,00",
    nilaibukuakuisisi: "100.000,00",
    status: ["Accept"],
  },
  {
    key: "2",
    tanggalakuisisi: "15-05-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "100.000,00",
    nilaibukuakuisisi: "100.000,00",
    status: ["Accept"],
  },
  {
    key: "3",
    tanggalakuisisi: "20-05-2023",
    detailassets: "(1033) Printer",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "5.100.000,00",
    nilaibukuakuisisi: "5.100.000,00",
    status: ["Accept"],
  },
  {
    key: "4",
    tanggalakuisisi: "01-06-2023",
    detailassets: "(1044) Power Bank",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "1.500.000,00",
    nilaibukuakuisisi: "1.500.000,00",
    status: ["Pending"],
  },
  {
    key: "5",
    tanggalakuisisi: "10-06-2023",
    detailassets: "(1044) Power Bank",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "1.500.000,00",
    nilaibukuakuisisi: "1.500.000,00",
    status: ["Pending"],
  },
  {
    key: "6",
    tanggalakuisisi: "01-07-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "100.000,00",
    nilaibukuakuisisi: "100.000,00",
    status: ["Accept"],
  },
  {
    key: "7",
    tanggalakuisisi: "10-07-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "100.000,00",
    nilaibukuakuisisi: "100.000,00",
    status: ["Accept"],
  },
  {
    key: "8",
    tanggalakuisisi: "15-07-2023",
    detailassets: "(1044) Power Bank",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "1.500.000,00",
    nilaibukuakuisisi: "1.500.000,00",
    status: ["Pending"],
  },
  {
    key: "9",
    tanggalakuisisi: "20-07-2023",
    detailassets: "(1044) Power Bank",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "1.500.000,00",
    nilaibukuakuisisi: "1.500.000,00",
    status: ["Pending"],
  },
  {
    key: "10",
    tanggalakuisisi: "25-07-2023",
    detailassets: "(1044) Power Bank",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "2.100.000,00",
    nilaibukuakuisisi: "2.100.000,00",
    status: ["Reject"],
  },
  {
    key: "11",
    tanggalakuisisi: "27-07-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "100.000,00",
    nilaibukuakuisisi: "100.000,00",
    status: ["Reject"],
  },
  {
    key: "12",
    tanggalakuisisi: "01-08-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "200.000,00",
    nilaibukuakuisisi: "200.000,00",
    status: ["Accept"],
  },
  {
    key: "13",
    tanggalakuisisi: "10-08-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "200.000,00",
    nilaibukuakuisisi: "200.000,00",
    status: ["Accept"],
  },
  {
    key: "14",
    tanggalakuisisi: "20-08-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "200.000,00",
    nilaibukuakuisisi: "200.000,00",
    status: ["Accept"],
  },
  {
    key: "15",
    tanggalakuisisi: "23-08-2023",
    detailassets: "(1022) Kertas",
    akunassets: "(1-00701) Asset Tetap - Perlengkapan Kantor",
    biayaakuisisi: "100.000,00",
    nilaibukuakuisisi: "100.000,00",
    status: ["Reject"],
  },
];

const Assets = () => {
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
  const columns = [
    {
      title: "Tanggal Akuisisi",
      dataIndex: "tanggalakuisisi",
      key: "tanggalakuisisi",
      width: "15%",
      ...getColumnSearchProps("tanggalakuisisi"),
    },
    {
      title: "Detail Assets",
      dataIndex: "detailassets",
      key: "detailassets",
      width: "15%",
      ...getColumnSearchProps("detailassets"),
    },
    {
      title: "Akun Assets",
      dataIndex: "akunassets",
      key: "akunassets",
      width: "25%",
      ...getColumnSearchProps("akunassets"),
    },
    {
      title: "Biaya Akuisisi",
      dataIndex: "biayaakuisisi",
      key: "biayaakuisisi",
      width: "20%",
      ...getColumnSearchProps("biayaakuisisi"),
    },
    {
      title: "Nilai Buku Akuisisi",
      dataIndex: "nilaibukuakuisisi",
      key: "nilaibukuakuisisi",
      width: "20%",
      ...getColumnSearchProps("nilaibukuakuisisi"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "20%",
      ...getColumnSearchProps("status"),
      render: status => (
        <span>
          {Array.isArray(status) &&
            status.map(tag => {
              let color = "green";
              if (tag === "Pending") {
                color = "grey";
              }
              if (tag === "Reject") {
                color = "red";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
        </span>
      ),
    },
  ];
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Data Assets</h1>
        <div className={styles.button}>
          <Link href='/buatkontak'>
            <Button
              style={{
                backgroundColor: "#ffcf00",
                marginTop: "4rem",
                marginBottom: "3rem",
              }}
            >
              Buat Asset Baru
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

export default Assets;
