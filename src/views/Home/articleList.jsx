import React, { useState, useMemo, useEffect } from "react"
import { Radio, Tabs, Col, Row } from "antd"
import Iconfont from "@/component/IconFont"
import {setItem} from "@/utils"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
const { TabPane } = Tabs
function ArticleList({ type, data }) {
  const [key, setKey] = useState("0")
  const [tabs, setTabs] = useState(1)
  const [list, setList] = useState([])
  const addStep = (num) => {
    if (num === -1 && Number(key) == 0) return
    if (Number(key) + num < tabs) setKey(Number(key) + num + "")
  }
  // const navigate = useNavigate()

  const navDetails = (data)=>{
    setItem('article',data)
    navigate('/details/article')

  }
  useEffect(() => {
    let arr = data.slice(key * 3, (Number(key) + 1) * 3)
    setList(arr)
  }, [key, data])
  useMemo(() => {
    setTabs(Math.ceil(data.length / 3))
  }, [data])
  return (
    <div className="research-list">
      <Row gutter={20} align="middle">
        <Col span={2} onClick={() => addStep(-1)}>
          <Iconfont
            type="icon-jiantou_xiangzuoliangci"
            size={40}
            color={"#03beca"}
          />
        </Col>
        <Col span={20}>
          <div className="title">Latest Web3 Game {type}</div>
          <Tabs activeKey={key}>
            {[
              ...Array.from(
                {
                  length: tabs,
                },
                (_, i) => i
              ),
            ].map((i) => (
              <TabPane key={i} disabled={i === 28}>
                <Row gutter={20}>
                  {list.map((e) => (
                    <Col span={8} key={e.id}>
                      <Link to={`/details/${'article'}/${e.id}`}>
                        <div
                          className="title-item"
                          // onClick={()=>{navDetails(e)}}
                        >
                          <img src={e.cover||e.coverImage} alt="" />
                          <h3>{e.title}</h3>
                          <div className="time">
                            {dayjs(e.updatedAt ).format("MMMM D, YYYY")}
                          </div>
                          <p>{e.description}</p>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </TabPane>
            ))}
          </Tabs>
        </Col>
        <Col span={2} onClick={() => addStep(1)}>
          <Iconfont
            type="icon-jiantou_xiangyouliangci"
            size={40}
            color={"#03beca"}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ArticleList
