import React, { useState } from "react";
import { Table, Space, DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const dataSource = [
  {
    key: "1",
    tanggal: "2023-02-01",
    kodeakun: 1010,
    namaakun: "ACTIVA LANCAR",
    debit: "",
    kredit: "5.000.000.000,00",
  },
  {
    key: "2",
    tanggal: "2023-03-02",
    kodeakun: 1010,
    namaakun: "ACTIVA LANCAR",
    debit: "",
    kredit: "6.000.000.000,00",
  },
  {
    key: "3",
    kodeakun: 1011,
    tanggal: "2023-03-20",
    namaakun: "BANK MANDIRI",
    debit: "7.000.000.000,00",
    kredit: "",
  },
  {
    key: "4",
    kodeakun: 1011,
    tanggal: "2023-04-01",
    namaakun: "KAS",
    debit: "8.000.000.000,00",
    kredit: "",
  },
  {
    key: "5",
    kodeakun: 1012,
    tanggal: "2023-04-20",
    namaakun: "BANK BRI",
    debit: "",
    kredit: "5.000.000.000,00",
  },
  {
    key: "6",
    kodeakun: 1010,
    tanggal: "2023-05-01",
    namaakun: "ACTIVA LANCAR",
    debit: "",
    kredit: "10.000.000.000,00",
  },
];

const columns = [
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
  },
  {
    title: "Kode Akun",
    dataIndex: "kodeakun",
    key: "kodeakun",
  },
  {
    title: "Nama Akun",
    dataIndex: "namaakun",
    key: "namaakun",
  },
  {
    title: "Debit",
    dataIndex: "debit",
    key: "debit",
  },
  {
    title: "Kredit",
    dataIndex: "kredit",
    key: "kredit",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => <Space size='middle'>Edit</Space>,
  },
];

const App = () => {
  const [filteredData, setFilteredData] = useState(dataSource);

  const handleRefresh = () => {
    setFilteredData([...dataSource]);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDateRangeChange = (date, dateString) => {
    const startDate = moment(dateString[0], "YYYY-MM-DD");
    const endDate = moment(dateString[1], "YYYY-MM-DD");

    const filtered = dataSource.filter(item => {
      const itemDate = moment(item.tanggal, "YYYY-MM-DD");
      return (
        itemDate.isSameOrAfter(startDate) && itemDate.isSameOrBefore(endDate)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <>
      <RangePicker
        style={{ marginBottom: "5rem" }}
        onChange={handleDateRangeChange}
      />
      <button style={{ fontSize: "5rem" }} onClick={handleRefresh}>
        Refresh
      </button>
      <button style={{ fontSize: "5rem" }} onClick={handlePrint}>
        Print
      </button>
      <Table dataSource={filteredData} columns={columns} />
    </>
  );
};

export default App;
