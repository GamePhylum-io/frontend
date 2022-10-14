import React, { useEffect, useState } from "react"
import api from "@/api"
import { useTranslation } from "react-i18next"
import { Row, Col, Table } from "antd"
import Bubble from './bubble'
import {  useNavigate } from "react-router-dom"
import GameWatchList from '../GameWatchList'
// import "./index.less"

const moneyFormat = (num) => {
  return String(num).replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
};
function AssetScreener() {
  const [tableData, setTableData] = useState([])
  const { t } = useTranslation();
  const navigate = useNavigate()
  const columns = [
    {
      title: "#",
      render: (_, record, index) => `${index + 1}`,
      align: "center",
    },
    {
      title: t("Token"),
      dataIndex: "name",
      align: "left",
      render: (name, record) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              width={24}
              height={24}
              style={{ borderRadius: "50%", marginRight: "5px" }}
              src={record.imgurl}
              alt=""
            />
            <div>
              <div>{name}</div>
              <div style={{ fontSize: "12px", color: "#ccc" }}>
                {record.abbreviate}
              </div>
            </div>
          </div>
        )
      },
    },
    {
      title: t("PRICE"),
      dataIndex: "current_price",
      render: (currentPrice) => <span>${currentPrice}</span>,
      align: "center",
      sorter: (a, b) => a.current_price - b.current_price,
    },
    {
      title: t("CHANGE VS USD"),
      dataIndex: "change_oned",
      render: (num) => (
        <span style={{ color: num * 1 < 0 ? "#e96975" : "#32be88" }}>
          {num}%
        </span>
      ),
      align: "center",
      sorter: (a, b) => a.change_oned - b.change_oned,
    },
    {
      title: t("7 DAY TREND"),
      dataIndex: "change_sevend",
      align: "center",
      render: (num) => (
        <span style={{ color: num * 1 < 0 ? "#e96975" : "#32be88" }}>
          {num}%
        </span>
      ),
      sorter: (a, b) => a.change_sevend - b.change_sevend,
    },
    {
      title: t("24H Volume"),
      dataIndex: "volumeoneday",
      render: (num) => (
        <span>${moneyFormat((Math.round(num * 100) / 100).toFixed(0))}</span>
      ),
      align: "center",
      sorter: (a, b) => a.volumeoneday - b.volumeoneday,
    },
    {
      title: t("Market Cap"),
      dataIndex: "market_cap",
      render: (num) => (
        <span>${moneyFormat((Math.round(num * 100) / 100).toFixed(0))}</span>
      ),
      align: "center",
      sorter: (a, b) => a.market_cap - b.market_cap,
    },
    {
      width:120,
      title: t("Last 7 Days"),
      dataIndex: "price7dimage",
      render: (price7dimage) => <img src={price7dimage} alt="" />,
      align: "center",
    },
  ]

  const init = async () => {
    const { data } = await api.common.gameTokenList()
   
    data.data.forEach((item) => {
      if (item.current_price * 1 < 1) {
        item.current_price = (item.current_price * 1).toFixed(6);
      } else if (item.current_price * 1 < 10) {
        item.current_price = (item.current_price * 1).toFixed(4);
      } else {
        item.current_price = (item.current_price * 1).toFixed(2);
      }
      item.change_sevend = (item.change_sevend * 100).toFixed(2);
      item.change_oned = (item.change_oned * 100).toFixed(2);
    });
    setTableData(data.data)
  }
  // useEffect(() => {
  //   init()
  // }, [])
  return (
    <div className="asset-screener-page">
      {/* <Bubble tableData={tableData}/>
      <Table
        rowKey="cid"
        dataSource={tableData}
        columns={columns}
        pagination={{ pageSize: 50 }}
        onRow={record => {
          return {
            onClick: event => {
              navigate(`/data/screenerDetails/${record.id}`)
            },
          };
        }}
      /> */}
      <GameWatchList/>
    </div>
  )
}

export default AssetScreener
