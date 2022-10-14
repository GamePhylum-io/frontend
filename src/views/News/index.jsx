import React, { useEffect, useState } from "react"
import dayjs from "dayjs";
import {
  SearchOutlined,
 
} from '@ant-design/icons';
import { Table,Input } from "antd"
import { Link } from "react-router-dom"

import "./index.less"
import api from "@/api"


const columns = [
  {
    title: "Time",
    dataIndex: "updatetime",
    key: "id",
    render: (_, record) => <span>{dayjs(record.updatetime * 1000).fromNow()}</span>,
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Operation",
    key: "action",
    render: (_, record) =><Link  to={`/details/${'news'}/${record.id}`}>To view</Link> ,
  },
]
function News() {
  const [tableData, setTableData] = useState([])

  const setData = async()=>{
    const { code, data:Array } = await api.common.getNewsList()
    setTableData([...Array.data])
  }
  useEffect(() => {
    setData()
  }, []); 
  return (
    <div className="news-page">
      
      <Input className="m-b-30 m-t-20" size="large" placeholder="search by the title" prefix={<SearchOutlined />}></Input>
      < Table columns={columns} rowKey="id" dataSource={tableData} />
    </div>
  )
}

export default News
