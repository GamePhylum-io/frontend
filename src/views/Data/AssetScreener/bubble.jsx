import React from "react"
import { Row, Col } from "antd"
function Bubble({ tableData }) {
  return (
    <div className="bubble-wrapper m-b-20">
      <Row gutter={[20,20]}>
        {tableData.map((item) => {
          return (
            <Col flex="10%">
              <div
                key={item.id}
                className={
                  item.change_oned < 0 ? "ball red_ball" : "ball  blue_ball"
                }
              >
                <div className="info">
                  <img src={item.imgurl} alt="" />
                  <div>{item.abbreviate}</div>
                  <div>{item.change_oned}%</div>
                </div>

               
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Bubble
