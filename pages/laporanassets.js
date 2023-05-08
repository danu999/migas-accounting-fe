import Layout from "@/layout/Layout";
import styles from "@/styles/Laporan.module.css";
import Highlighter from "react-highlight-words";
import Link from "next/link";
import {
  DownloadOutlined,
  PrinterOutlined,
  SearchOutlined,
  SyncOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";
import { DatePicker, Typography, Space, Button, Input, Table, Tag } from "antd";
import { useRef, useState } from "react";
import moment from "moment";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const rangePresets = [
  {
    label: "Last 7 Days",
    value: [dayjs().add(-7, "d"), dayjs()],
  },
  {
    label: "Last 14 Days",
    value: [dayjs().add(-14, "d"), dayjs()],
  },
  {
    label: "Last 30 Days",
    value: [dayjs().add(-30, "d"), dayjs()],
  },
  {
    label: "Last 90 Days",
    value: [dayjs().add(-90, "d"), dayjs()],
  },
];

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

const LaporanAssets = () => {
  const tableRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleRefresh = () => {
    setFilteredData([...data]);
  };

  const handleDateRangeChange = (date, dateString) => {
    const startDate = moment(dateString[0], "DD-MM-YYYY");
    const endDate = moment(dateString[1], "DD-MM-YYYY");

    const filtered = data.filter(item => {
      const itemDate = moment(item.tanggalakuisisi, "DD-MM-YYYY");
      return (
        itemDate.isSameOrAfter(startDate) && itemDate.isSameOrBefore(endDate)
      );
    });

    setFilteredData(filtered);
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
      pdf.save("Laporan Assets.pdf");
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
        <h1>Laporan Assets</h1>
        <Typography style={{ marginTop: "4rem", marginLeft: "6px" }}>
          Pilih Tanggal
        </Typography>
        <RangePicker
          className={styles.date}
          presets={rangePresets}
          format='DD-MM-YYYY'
          onChange={handleDateRangeChange}
        />
        <Link href='/laporan'>
          <Button
            style={{
              marginLeft: "40rem",
              marginRight: "1rem",
              borderColor: "black",
            }}
            icon={<CaretLeftOutlined />}
          >
            Back
          </Button>
        </Link>
        <Button
          style={{
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
    </Layout>
  );
};

export default LaporanAssets;
