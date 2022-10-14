import React, { useEffect, memo, useState } from "react"
import api from "@/api"
import { Select, Row, Col } from "antd"
import dayjs from "dayjs"
import { setItem } from "@/utils"
import { Link } from "react-router-dom"
const { Option } = Select
function Game({ params, id, items, setId }) {
  const [articles, setArticles] = useState(null)

  const initData = async () => {
    const data = await api.common.getArticles({
      ...params,
      limit: 100,
      skip: 0,
    })
    if (data.length > 0) {
      setArticles(data)
    }
  }
  const onChange = (value) => {
    setId(value)
  }

  useEffect(() => {
    if (id) {
      initData()
    }
  }, [id])
  return (
    <div className="game-wrapper">
      <div className="top-select">
        <Select
          showSearch
          style={{ width: 320 }}
          size="large"
          optionFilterProp="children"
          value={id}
          onChange={onChange}
          filterOption={(input, option) => option.children.includes(input)}
          placeholder="Select The Project Name"
        >
          {items.map((e) => (
            <Option value={e.id} key={e.id}>
              {e.label}
            </Option>
          ))}
        </Select>
      </div>
      <Row gutter={20}>
        {articles &&
          articles.map((article) => (
            <Col span={8} key={article.id}>
              <Link to={`/details/${"article"}/${article.id}`}>
                <div
                  className="item"
                >
                  <img src={article.coverImage} alt="" />
                  <h2>{article.title}</h2>
                  <div className="time">
                    {dayjs(article.updatetime).format("MMMM D, YYYY")}
                  </div>
                  <p>{article.description}</p>
                </div>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default memo(Game)
