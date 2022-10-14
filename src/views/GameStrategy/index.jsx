import React, { useState, useEffect } from "react"
import { Menu, Col, Row } from "antd"
import Game from "./Game"
import api from "@/api"
import { useNavigate, useParams } from "react-router-dom"

import "./index.less"
const detaultItems = [
  {
    label: "Web3 Game Strategy List",
    key: "Web3 Game Strategy List",
    children: [],
  },
]

function GameStrategy() {
  const navigate = useNavigate()
  const routeParams = useParams()
  const [items, setItems] = useState([{ children: [] }])
  const [currentId, setCurrentId] = useState(null)
  const [params, setParams] = useState({
    category: "Strategy",
    tag: null,
  })

  const [muneKey, setMuneKey] = useState([null, "Web3 Game Strategy List"])
  const [config, setConfig] = useState({
    title: "Web3 Game Strategy List",
    view: "Web3 Game Strategy List",
  })
  const initData = async () => {
    const data = await api.common.getTags({
      category: "Strategy",
    })
    if (data.length > 0) {
      let list = data.map((e) => ({
        id: e.id,
        key: e.name,
        label: e.name,
      }))
      detaultItems[0].children = list

      setItems(detaultItems)
      if (routeParams.tag) {
        const { id, label } = list.filter(
          (item) => item.label == routeParams.tag
        )[0]
        setCurrentId(id)
        setParams({
          ...params,
          tag: label,
        })
        setMuneKey(label)
      }
    }
  }
  const onClick = (e) => {
    const { id, label } = detaultItems[0].children.filter(
      (item) => item.label == e.key
    )[0]
    setCurrentId(id)
    setParams({
      ...params,
      tag: label,
    })
    setMuneKey(e.keyPath)
    setConfig({
      title: e.key,
      view: e.keyPath[e.keyPath.length - 1],
    })
    navigate(`/gameStrategy/${label}`)
  }
  const setMenu = (id) => {
    const { label } = detaultItems[0].children.filter(
      (item) => item.id == id
    )[0]
    setParams({
      ...params,
      tag: label,
    })
    setMuneKey([label, muneKey[1]])
    setCurrentId(id)
  }
  useEffect(() => {
    initData()
  }, [])
  const ShowView = ({ page }) => {
    switch (page) {
      case "Web3 Game Strategy List":
        return (
          <Game
            params={params}
            id={currentId}
            items={items[0]?.children}
            setId={setMenu}
          />
        )
      default:
        return null
    }
  }
  return (
    <div className="game-strategy">
      <div className="left">
        <Menu
          mode="inline"
          defaultOpenKeys={["Web3 Game Strategy List"]}
          defaultSelectedKeys={["Web3 Game Strategy List"]}
          selectedKeys={muneKey}
          style={{
            width: 256,
          }}
          onClick={onClick}
          items={items}
        />
      </div>
      <div className="right">
        <ShowView page={config.view} />
      </div>
    </div>
  )
}

export default GameStrategy
