import React from "react"
import { Row, Col, Radio } from "antd"
import ReactEcharts from "echarts-for-react"
import "./index.less"
function CommonCharts(props) {
  return (
    <Row
      className="common-charts-wrapper"
      align="middle"
    >
      <Col span={24} >
        <Row className="title-wrapper" justify="space-between">
          <Col span={12} className="title f-s-18 m-b-10">
            {props.title || ""}
          </Col>
          <Col >
            <Radio.Group size={"small"}>
              <Radio.Button value="day">24h</Radio.Button>
              <Radio.Button value="week">7d</Radio.Button>
              <Radio.Button value="month">30d</Radio.Button>
              <Radio.Button value="all">ALL</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <ReactEcharts {...props} />
      </Col>
    </Row>
  )
}

export default CommonCharts
