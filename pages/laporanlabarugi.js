import Layout from "@/layout/Layout";
import styles from "@/styles/Laporan.module.css";
import Highlighter from "react-highlight-words";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import { DownloadOutlined, PrinterOutlined } from "@ant-design/icons";
import { DatePicker, Typography, Space, Button, Input, Table } from "antd";
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
    tanggal: "01-02-2023",
    kodeakun: 1010,
    namaakun: "ACTIVA LANCAR",
    debit: "",
    kredit: "5.000.000.000,00",
  },
  {
    key: "2",
    tanggal: "02-03-2023",
    kodeakun: 1010,
    namaakun: "ACTIVA LANCAR",
    debit: "",
    kredit: "6.000.000.000,00",
  },
  {
    key: "3",
    kodeakun: 1011,
    tanggal: "20-03-2023",
    namaakun: "BANK MANDIRI",
    debit: "7.000.000.000,00",
    kredit: "",
  },
  {
    key: "4",
    kodeakun: 1011,
    tanggal: "01-04-2023",
    namaakun: "KAS",
    debit: "8.000.000.000,00",
    kredit: "",
  },
  {
    key: "5",
    kodeakun: 1012,
    tanggal: "20-04-2023",
    namaakun: "BANK BRI",
    debit: "",
    kredit: "5.000.000.000,00",
  },
  {
    key: "6",
    kodeakun: 1010,
    tanggal: "01-05-2023",
    namaakun: "ACTIVA LANCAR",
    debit: "",
    kredit: "10.000.000.000,00",
  },
  {
    key: "7",
    kodeakun: 1010,
    tanggal: "11-05-2023",
    namaakun: "ACTIVA LANCAR",
    debit: "9.000.000.000,00",
    kredit: "",
  },
  {
    key: "8",
    kodeakun: 1012,
    tanggal: "20-05-2023",
    namaakun: "BANK BRI",
    debit: "8.000.000.000,00",
    kredit: "",
  },
  {
    key: "9",
    kodeakun: 1012,
    tanggal: "22-05-2023",
    namaakun: "BANK BRI",
    debit: "",
    kredit: "10.000.000.000,00",
  },
  {
    key: "10",
    kodeakun: 1011,
    tanggal: "23-05-2023",
    namaakun: "KAS",
    debit: "",
    kredit: "7.000.000.000,00",
  },
  {
    key: "11",
    kodeakun: 1011,
    tanggal: "01-06-2023",
    namaakun: "KAS",
    debit: "",
    kredit: "4.000.000.000,00",
  },
  {
    key: "12",
    kodeakun: 1010,
    tanggal: "10-06-2023",
    namaakun: "ACTIVA LANCAR",
    debit: "",
    kredit: "8.000.000.000,00",
  },
  {
    key: "13",
    kodeakun: 1010,
    tanggal: "15-06-2023",
    namaakun: "ACTIVA LANCAR",
    debit: "9.000.000.000,00",
    kredit: "",
  },
  {
    key: "14",
    kodeakun: 1010,
    tanggal: "20-06-2023",
    namaakun: "ACTIVA LANCAR",
    debit: "10.000.000.000,00",
    kredit: "",
  },
  {
    key: "15",
    kodeakun: 1012,
    tanggal: "22-06-2023",
    namaakun: "BANK BRI",
    debit: "",
    kredit: "8.000.000.000,00",
  },
  {
    key: "16",
    kodeakun: 1012,
    tanggal: "23-06-2023",
    namaakun: "BANK BRI",
    debit: "",
    kredit: "7.000.000.000,00",
  },
  {
    key: "17",
    kodeakun: 1010,
    tanggal: "01-07-2023",
    namaakun: "ACTIVA LANCAR",
    debit: "7.000.000.000,00",
    kredit: "",
  },
  {
    key: "18",
    kodeakun: 1010,
    tanggal: "20-07-2023",
    namaakun: "ACTIVA LANCAR",
    debit: "10.000.000.000,00",
    kredit: "",
  },
];

const LaporanLabaRugi = () => {
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
      const itemDate = moment(item.tanggal, "DD-MM-YYYY");
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
      pdf.save("Laporan Laba Rugi.pdf");
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
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      width: "20%",
      ...getColumnSearchProps("tanggal"),
    },
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
      title: "Debit",
      dataIndex: "debit",
      key: "debit",
      width: "20%",
      ...getColumnSearchProps("debit"),
    },
    {
      title: "Kredit",
      dataIndex: "kredit",
      key: "kredit",
      width: "30%",
      ...getColumnSearchProps("kredit"),
    },
  ];
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Laporan Laba Rugi</h1>
        <Typography style={{ marginTop: "4rem", marginLeft: "6px" }}>
          Pilih Tanggal
        </Typography>
        <RangePicker
          className={styles.date}
          presets={rangePresets}
          format='DD-MM-YYYY'
          onChange={handleDateRangeChange}
        />
        <Button
          style={{
            marginLeft: "49rem",
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

export default LaporanLabaRugi;
