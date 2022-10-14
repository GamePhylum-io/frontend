import React, { useEffect, useState } from "react"
import { Row, Col, Button, Card } from "antd"
import data3 from "@/assets/img/home/data3.png"
import data1 from "@/assets/img/home/data1.png"
import data2 from "@/assets/img/home/data2.png"
import data4 from "@/assets/img/home/data4.jpeg"
import { Link } from "react-router-dom"
const viewList = [
  {
    title: "Discover the Popular game",
    content:
      "Discover popular games, play popular games and earn money from them.",
    img: data1,
    url: "/data/screener",
  },
  {
    title: "Research the latest game strategy",
    img: data3,
    content:
      "By learning the strategy of different games, you can easily get started with various games, continuously improve your game skills and eventually become a game master.",
    url: "/gameStrategy",
  },

  {
    title: "Track game data andmake the right investment decisions",
    img: data4,
    content:
      "View the data charts of various dimensions of the game to understand the operation status of the game and makemore accurate investment decisions.",
    url: "/data/chart",
  },
  {
    title: "Learn about payback periods and yields for specific games",
    content:
      "Check the payback period and profitability of the game you are interested in,and choose a game that suits you.",
    img: data2,
    url: "/data/chart",
  },
]
function Introduce() {
  const [img, setImg] = useState("")

  const handleMouseEnter = (img) => {
    setImg(img)
  }
  useEffect(() => {
    handleMouseEnter(data1)
  }, [])
  return (
    <div className="info-wrapper" id="explore">
      <Row gutter={20}>
        <Col span={2}></Col>
        <Col span={8}>
          <Row gutter={[0, 20]}>
            {viewList.map((item, i) => (
              <Col
                key={i}
                span={24}
                onMouseEnter={() => {
                  handleMouseEnter(item.img)
                }}
              >
                <Card>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <Link to={item.url}>
                    <Button shape="round" >View</Button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="item"></div>
        </Col>
        <Col span={14} className="right">
          <img src={img} alt="" />
        </Col>
       
      </Row>
    </div>
  )
}

export default Introduce
