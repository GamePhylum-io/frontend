import React, { useEffect } from "react"
import { Row, Col } from "antd"
import ReactEcharts from "echarts-for-react"
import CommonCharts from '@/component/commonCharts'
import CommonLists from '@/component/commonLists'
import GameWatchList from '../../GameWatchList'
// import "./index.less"
import api from '@/api'

const colors = ["#EE6666", "#5470C6"]
const option = {
  color: colors,
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  grid: {
    right: "20%",
  },

  legend: {
    data: [
      {
        name: "Evaporation",
        icon: "circle",
      },
      {
        name: "Temperature",
        icon: "circle",
      },
    ],
    itemHeight: 10, // 图例icon高度
    itemWidth: 10,
    itemGap: 10,
    left: "left",
    textStyle: {
      color: "#ccc",
    },
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        show: false, 
        alignWithLabel: true,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#fff",
        },
      },
      // prettier-ignore
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  ],
  yAxis: [
    {
      type: "value",
      position: "right",
      alignTicks: true,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#133752",
        },
      },
      axisLabel: {
        formatter: "{value} ml",
      },
    },
    {},
    {
      type: "value",
      position: "left",
      alignTicks: true,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#133752",
        },
      },
      axisLabel: {
        formatter: "{value} °C",
      },
    },
  ],
  series: [
    {
      name: "Evaporation",
      type: "bar",
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
    },
    {
      name: "Temperature",
      type: "line",
      symbol: "none",
      yAxisIndex: 2,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
}
const option1= {
  color:'#ee9417',
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        color: "#133752",
      },
    },
  },
  
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      symbol: "none",
      areaStyle: {
        opacity:0.3
      }
    }
  ]
}
function Dashboard() {
  const init = async()=>{
   
   
  }
  useEffect(()=>{
    init()
  },[])
  return (
    <div className="dashboard-page">
      {/* <Row gutter={[20,30]}>
        <Col span={12}>
          <CommonCharts title="Average Price & Volume" option={option} notMerge={true} lazyUpdate={true}/>
          
        </Col>
        <Col span={12}>
        <CommonCharts title="Price Range" option={option} notMerge={true} lazyUpdate={true}/>
        </Col>
        <Col span={12}>
          <CommonCharts title="Growth Trend of NFT Holder Address" option={option1} lazyUpdate={true}/>
        </Col>
        <Col span={12}>
        <CommonCharts title="Transactions of NFT" option={option1} lazyUpdate={true}/>
        </Col>
        <Col span={12}>
        <CommonLists title="Top Seller&Buyer NFT" ></CommonLists>
        </Col>
        <Col span={12}>
        <CommonLists title="Top Seller&Buyer NFT" ></CommonLists>
        </Col>
        <Col span={24}>
        <CommonLists title="Top Seller&Buyer NFT" ></CommonLists>
        </Col>
      </Row> */}
      <GameWatchList/>
    </div>
  )
}

export default Dashboard
