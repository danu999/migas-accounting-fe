import Layout from "@/layout/Layout";
import Link from "next/link";
import styles from "@/styles/Simpanpinjam.module.css";
import Highlighter from "react-highlight-words";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import {
  DownloadOutlined,
  PrinterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table, Menu, Dropdown } from "antd";

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
  {
    key: "5",
    kodeakun: 1001,
    tanggal: "07-02-2023",
    nama: "UMK IABA",
    kategori: "Usaha",
    deskripsi: "Penulisan Cicilan",
    debit: "-",
    kredit: "Rp 1.000.000,00",
  },
  {
    key: "6",
    kodeakun: 1001,
    tanggal: "09-02-2023",
    nama: "UMK IKB",
    kategori: "Usaha",
    deskripsi: "Penulisan Cicilan",
    debit: "-",
    kredit: "Rp 2.000.000,00",
  },
  {
    key: "7",
    kodeakun: 1003,
    tanggal: "04-03-2023",
    nama: "A.N Sutrisna Tri Prabowo",
    kategori: "Anggota",
    deskripsi: "Pinjaman Piutang",
    debit: "Rp 4.000.000,00",
    kredit: "-",
  },
  {
    key: "8",
    kodeakun: 1003,
    tanggal: "05-04-2023",
    nama: "A.N Maniyem Sumarem",
    kategori: "Anggota",
    deskripsi: "Pinjaman Piutang",
    debit: "Rp 5.000.000,00",
    kredit: "-",
  },
  {
    key: "9",
    kodeakun: 1003,
    tanggal: "05-06-2023",
    nama: "A.N Suparjo",
    kategori: "Anggota",
    deskripsi: "Pelunasan Cicilan",
    debit: "-",
    kredit: "Rp 6.000.000,00",
  },
  {
    key: "10",
    kodeakun: 1003,
    tanggal: "05-07-2023",
    nama: "A.N Sutrisna",
    kategori: "Anggota",
    deskripsi: "Pelunasan Cicilan",
    debit: "-",
    kredit: "Rp 8.000.000,00",
  },
];
const menu = (
  <Menu>
    <Menu.Item key='1'>
      <Link href='/path/to/option1'>Option 1</Link>
    </Menu.Item>
    <Menu.Item key='2'>
      <Link href='/path/to/option2'>Option 2</Link>
    </Menu.Item>
    <Menu.Item key='3'>
      <Link href='/path/to/option3'>Option 3</Link>
    </Menu.Item>
  </Menu>
);

const SimpanPinjam = () => {
  const tableRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleRefresh = () => {
    setFilteredData([...data]);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  const exportPDF = () => {
    const now = new Date();
    const dateString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    html2canvas(tableRef.current).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      pdf.addImage(imgData, "PNG", 20, 40, 550, 0);
      pdf.setFontSize(12);
      pdf.text(`Printed on: ${dateString}`, 20, 30);
      pdf.save("Simpan Pinjam.pdf");
    });
  };

  const printTable = () => {
    const content = tableRef.current;
    const print = document.getElementById("ifmcontentstoprint").contentWindow;
    print.document.open();
    print.document.write(content.outerHTML);
    print.document.close();
    print.focus();
    print.print();
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
      width: "18%",
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
          <Dropdown overlay={menu} placement='bottomLeft'>
            <Button
              style={{
                backgroundColor: "#ffcf00",
                marginTop: "4rem",
                marginBottom: "3rem",
              }}
            >
              Buat Baru <DownOutlined />
            </Button>
          </Dropdown>
          <Button
            style={{
              marginLeft: "60rem",
              marginRight: "1rem",
              borderColor: "black",
            }}
            icon={<DownloadOutlined />}
            onClick={exportPDF}
          >
            Export PDF
          </Button>
          <Button
            style={{ borderColor: "black", marginRight: "1rem" }}
            icon={<PrinterOutlined />}
            onClick={printTable}
          >
            Print
          </Button>
          <Button
            style={{ borderColor: "black" }}
            icon={<SyncOutlined />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>
          <iframe
            id='ifmcontentstoprint'
            style={{ height: "0px", width: "0px", position: "absolute" }}
          />
          <iframe
            id='ifmcontentstoprint'
            style={{ height: "0px", width: "0px", position: "absolute" }}
          />
          <Table
            columns={columns}
            dataSource={filteredData}
            ref={tableRef}
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
