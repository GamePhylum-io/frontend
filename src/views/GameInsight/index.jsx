import React, { useState, useEffect } from "react"
import { Menu, Col, Row } from "antd"
import Game from "./Game"
import api from "@/api"
import { useNavigate, useParams } from "react-router-dom"

import "./index.less"

const detaultItems = [
  {
    label: "Web3 Game Macro Insight",
    key: "Web3 Game Macro Insight",
    children: [],
  },
  {
    label: "Specific Web3 Game Insight",
    key: "Specific Web3 Game Insight",
    children: [],
  },
]

function GameInsight() {
  const navigate = useNavigate()
  const routeParams = useParams()
  const [items, setItems] = useState([])
  const [currentId, setCurrentId] = useState(null)
  const [params, setParams] = useState({
    tag: null,
    category: "Macro",
  })
  const [muneKey, setMuneKey] = useState([null,routeParams.category])
  const [config, setConfig] = useState({
    title: "Web3 Game Macro Insight",
    view: "Web3 Game Macro Insight",
  })
  const initData = async () => {
    const macroData = await api.common.getTags({
      category: "Macro",
    })
    const specificData = await api.common.getTags({
      category: "Specific",
    })
    if (macroData.length > 0) {
      let list = macroData.map((e) => ({
        id: e.id,
        key: e.name,
        label: e.name,
      }))
      detaultItems[0].children = list
      
    }
    if (specificData.length > 0) {
      let list = specificData.map((e) => ({
        id: e.id,
        key: e.name,
        label: e.name,
      }))
      detaultItems[1].children = list
    }
    setItems(detaultItems)
    if (routeParams.tag) {
      const {tag,category} =routeParams
      const list = category === 'Web3 Game Macro Insight'?macroData:specificData
      const { id, name } = list.filter(
        (e) => e.name==tag
      )[0]
     
      setCurrentId(id)
      setParams({
        category: category === 'Web3 Game Macro Insight'?'Macro':'Specific',
        tag: name,
      })
      setConfig({
        title: tag,
        view: category,
      })
      setMuneKey([name,category])
    }
  }
  const onClick = (e) => {
    if (e.keyPath[1] === "Web3 Game Macro Insight") {
      const { label, id } = detaultItems[0].children.filter(
        (item) => item.label == e.key
      )[0]
      setParams({
        tag: label,
        category: "Macro",
      })
      setCurrentId(id)
     
    } else {
      const { label, id } = detaultItems[1].children.filter(
        (item) => item.label == e.key
      )[0]
      setParams({
        tag: label,
        category: "Specific",
      })
      setCurrentId(id)
    }
  
    setMuneKey(e.keyPath)
    setConfig({
      title: e.key,
      view: e.keyPath[e.keyPath.length - 1],
    })
    navigate(`/gameInsight/${e.keyPath[1]}/${e.key}`)
   
  }
  const setMenu = (id) => {
   
    if (params.category === "Macro") {
      const data = detaultItems[0].children.filter(
        (item) => item.id == id
      )[0]
      setParams({
        ...params,
        tag: data.label,
      })

      setMuneKey([data.label, muneKey[1]])

      setCurrentId(id)
    }
  }
  useEffect(() => {
    initData()
  }, [])
  const ShowView = ({ page }) => {
    switch (page) {
      case "Specific Web3 Game Insight":
        return (
          <Game
            params={params}
            id={currentId}
            items={detaultItems[1].children}
            setId={setMenu}
          />
        )
      case "Web3 Game Macro Insight":
        return (
          <Game
            params={params}
            id={currentId}
            items={detaultItems[0].children}
            setId={setMenu}
          />
        )
      default:
        return null
    }
  }
  console.log()
  return (
    <div className="game-insight">
      <div className="left">
        <Menu
          mode="inline"
          defaultOpenKeys={[muneKey[1]]}
          defaultSelectedKeys={[muneKey[1]]}
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

export default GameInsight
