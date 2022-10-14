import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Menu, Col, Row } from "antd"
import logo from "@/assets/img/logo.png"
import "./index.less"

const items = [
  {
    label: (
      <Link className="list-group-item" to="/home">
        Home
      </Link>
    ),
    key: "home",
  },
  {
    label: "Data",
    key: "data",
    children: [
      {
        key: "screener",
        label: (
          <Link className="list-group-item" to="/data/screener">
            Game Asset Screener
          </Link>
        ),
      },
      {
        key: "watch",
        label: (
          <Link className="list-group-item" to="/data/watch">
            Game Watch List
          </Link>
        ),
      },
      {
        key: "chart",
        label: (
          <Link className="list-group-item" to="/data/chart">
            Game Chart Explore
          </Link>
        ),
      },
    ],
  },
  {
    key: "gameStrategy",
    label: (
      <Link className="list-group-item" to="/gameStrategy">
        Game Strategy
      </Link>
    ),
  },
  {
    key: "gameInsight",
    label: (
      <Link className="list-group-item" to="/gameInsight">
        Game Insight
      </Link>
    ),
  },
  {
    label: (
      <Link className="list-group-item" to="/news">
        News
      </Link>
    ),
    key: "news",
  },
]
function Layout() {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
  // const [current, setCurrent] = useState("data")
  const current = pathname.split("/").filter((item) => item)

  return (
    <div className="layout">
      <div className="header">
        <Row align="middle" justify="space-between" style={{ height: "100%" }}>
          <Col span={4}>
            <img src={logo} alt="" className="logo" />
          </Col>
          <Col flex="1">
            <Row align="middle" justify="end">
              <div className="menu-wrapper">
                <Menu mode="horizontal" items={items} selectedKeys={current} />
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
