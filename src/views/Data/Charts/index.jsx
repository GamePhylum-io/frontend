import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Menu, Col, Row } from "antd"
import Dashboard from './Dashboard'
import Paradise from './Paradise'
import Period from './Period'
import "./index.less"

const items = [
  {
    label: "Game Project Dashboard",
    key: "Dashboard",
    children: [
      {
        key: "dashboard-StarSharks",
        label: "StarSharks",
      },
      {
        key: "dashboard-Axie Inifity",
        label: "Axie Inifity",
      },
      {
        key: "dashboard-Dracoo Master",
        label: "Dracoo Master",
      },
    ],
  },
  {
    label: "Game NFT Paradise",
    key: "Paradise",
    children: [
      {
        key: "Game NFT Overview",
        label: "Game NFT Overview",
      },
      {
        key: "Sharks",
        label: "Sharks",
      },
      {
        key: "Axie",
        label: "Axie",
      },
      {
        key: "Dracoo",
        label: "Dracoo",
      },
    ],
  },
  {
    label: "Game Payback Period",
    key: "Period",
    children: [
      {
        key: "StepN",
        label: "StepN",
      },
      {
        key: "StarSharks",
        label: "StarSharks",
      },
      {
        key: "Axie Inifity",
        label: "Axie Inifity",
      },
      {
        key: "Dracoo Master",
        label: "Dracoo Master",
      },
    ],
  },
]
function Charts() {
  const [config, setConfig] = useState({
    title: "StarSharks",
    view: "Dashboard",
  })
  const onClick = (e) => {
    setConfig({
      title: e.key.split("-")[1],
      view: e.keyPath[1],
    })
  }
  const ShowView = ({page}) => {
    switch (page) {
      case 'Dashboard':
        return <Dashboard />
      case 'Paradise':
        return <Paradise />
      case 'Period':
        return <Period />
      default:
        return null
    }
  }
  return (
    <div className="charts-page">
      <div className="left">
        <Menu
          mode="inline"
          defaultOpenKeys={["Dashboard", "dashboard-StarSharks"]}
          defaultSelectedKeys={["Dashboard", "dashboard-StarSharks"]}
          style={{
            width: 256,
          }}
          onClick={onClick}
          items={items}
        />
      </div>
      <div className="right">
        <div className="top">{config.title}</div>
        <ShowView page={config.view} />
      </div>
    </div>
  )
}

export default Charts
