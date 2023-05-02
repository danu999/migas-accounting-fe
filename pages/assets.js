import Layout from "@/layout/Layout";
import Link from "next/link";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import styles from "@/styles/Datakontak.module.css";
import Highlighter from "react-highlight-words";

const data = [
  {
    key: "1",
    namakontak: "Simon Malaranggeng",
    nohandphone: "081276568874",
    kategorikontak: "ANGGOTA",
    saldo: "5.000.000.000,00",
  },
  {
    key: "2",
    namakontak: "Doni Marpaing",
    nohandphone: "081276567364",
    kategorikontak: "ANGGOTA",
    saldo: "4.000.000.000,00",
  },
  {
    key: "3",
    namakontak: "Dina PT. Sumber",
    nohandphone: "081276523654",
    kategorikontak: "USAHA",
    saldo: "9.000.000.000,00",
  },
  {
    key: "4",
    namakontak: "Somsinad PT. Ogah Makmur",
    nohandphone: "081276976453",
    kategorikontak: "USAHA",
    saldo: "8.000.000.000,00",
  },
  {
    key: "5",
    namakontak: "Dion Rozaki",
    nohandphone: "081276568665",
    kategorikontak: "ANGGOTA",
    saldo: "3.000.000.000,00",
  },
  {
    key: "6",
    namakontak: "Mavis Saputri",
    nohandphone: "081276895423",
    kategorikontak: "ANGGOTA",
    saldo: "2.000.000.000,00",
  },
  {
    key: "7",
    namakontak: "Wiji PT. Srilangka",
    nohandphone: "08127698765",
    kategorikontak: "USAHA",
    saldo: "3.000.000.000,00",
  },
  {
    key: "8",
    namakontak: "Mike Pt. Alfaria",
    nohandphone: "081276567654",
    kategorikontak: "USAHA",
    saldo: "9.000.000.000,00",
  },
  {
    key: "9",
    namakontak: "Siti Umairoh",
    nohandphone: "081276568444",
    kategorikontak: "ANGGOTA",
    saldo: "2.000.000.000,00",
  },
  {
    key: "10",
    namakontak: "Umar Dzin Syeki",
    nohandphone: "081276535728",
    kategorikontak: "ANGGOTA",
    saldo: "4.000.000.000,00",
  },
];

const DataKontak = () => {
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
      width: "20%",
      ...getColumnSearchProps("tanggalakuisisi"),
    },
    {
      title: "Detail Assets",
      dataIndex: "detailassets",
      key: "detailassets",
      width: "20%",
      ...getColumnSearchProps("detailassets"),
    },
    {
      title: "Akun Assets",
      dataIndex: "akunassets",
      key: "akunassets",
      width: "20%",
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
        <h1>Data Kontak</h1>
        <div className={styles.button}>
          <Link href='/buatkontak'>
            <Button
              style={{
                backgroundColor: "#ffcf00",
                marginTop: "4rem",
                marginBottom: "3rem",
              }}
            >
              Buat Kontak Baru
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

export default DataKontak;
