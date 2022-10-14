import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Menu, Col, Row } from "antd"
import Project from './Project'
import Macro from './Macro'
// import "./index.less"




const items = [
  {
    label: "GameFi Strategy Reserch",
    key: "Reserch",
    children: [
      {
        key: "GameFi Project Reserch",
        label: "GameFi Project Reserch",
      },
      {
        key: "GameFi Macro Reserch",
        label: "GameFi Macro Reserch",
      }
    ],
  },
  {
    label: "Game Strategy List",
    key: "Game Strategy List",
  },
]
function Research() {
  const [config, setConfig] = useState({
    title: "GameFi Project Reserch",
    view: "GameFi Project Reserch",
  })
  const onClick = (e) => {
    setConfig({
      title: e.key,
      view: e.keyPath[0],
    })
  }
  const ShowView = ({page}) => {
    switch (page) {
      case 'GameFi Project Reserch':
        return <Project />
      case 'GameFi Macro Reserch':
        return <Macro />
      default:
        return null
    }
  }
  return (
    <div className="charts-page">
      <div className="left">
        <Menu
          mode="inline"
          defaultOpenKeys={["Reserch", "GameFi Project Reserch"]}
          defaultSelectedKeys={["Reserch", "GameFi Project Reserch"]}
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

export default Research
