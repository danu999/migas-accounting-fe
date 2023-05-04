import Layout from "@/layout/Layout";
import Link from "next/link";
import styles from "@/styles/Simpanpinjam.module.css";
import Highlighter from "react-highlight-words";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";

const data = [
  {
    key: "1",
    kodeakun: 1001,
    tanggal: "01-02-2023",
    nama: "UMK IBT",
    kategori: "Usaha",
    deskripsi: "Penulisan Cicilan",
    debit: "-",
    kredit: "Rp 5.000.000,00",
  },
  {
    key: "2",
    kodeakun: 1001,
    tanggal: "02-02-2023",
    nama: "UMK JKA",
    kategori: "Usaha",
    deskripsi: "Penulisan Cicilan",
    debit: "-",
    kredit: "Rp 2.000.000,00",
  },
  {
    key: "3",
    kodeakun: 1002,
    tanggal: "04-02-2023",
    nama: "UMK IKM",
    kategori: "Usaha",
    deskripsi: "Pinjaman",
    debit: "Rp 4.000.000,00",
    kredit: "-",
  },
  {
    key: "4",
    kodeakun: 1002,
    tanggal: "05-02-2023",
    nama: "UMK HANDAK",
    kategori: "Usaha",
    deskripsi: "Pinjaman",
    debit: "Rp 5.000.000,00",
    kredit: "-",
  },
];

const SimpanPinjam = () => {
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
      title: "Kode Akun",
      dataIndex: "kodeakun",
      key: "kodeakun",
      width: "10%",
      ...getColumnSearchProps("kodeakun"),
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      width: "10%",
      ...getColumnSearchProps("tanggal"),
    },
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
      width: "15%",
      ...getColumnSearchProps("nama"),
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
      width: "15%",
      ...getColumnSearchProps("kategori"),
    },
    {
      title: "Deskripsi",
      dataIndex: "deskripsi",
      key: "deskripsi",
      width: "20%",
      ...getColumnSearchProps("deskripsi"),
    },
    {
      title: "Debit",
      dataIndex: "debit",
      key: "debit",
      width: "15%",
      ...getColumnSearchProps("debit"),
    },
    {
      title: "Kredit",
      dataIndex: "kredit",
      key: "kredit",
      width: "15%",
      ...getColumnSearchProps("kredit"),
    },
  ];
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Simpan Pinjam</h1>
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

export default SimpanPinjam;
