import React from "react"
import { Row, Col, Radio,Table,Progress } from "antd"
import "./index.less"

const dataSource = [
  {
    key: '1',
    time: 'zcxcz',
    amount: 32,
    address: 'asdadasdasd',
  },
  {
    key: '2',
    time: 'zczz',
    amount: 42,
    address: 'asdsadadasdas',
  },
];

const columns = [
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (_, { amount }) => (
      <>
       <span>{amount}</span>
       <Progress percent={30} showInfo={false}/>
      </>
    ),
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
];
function CommonLists(props) {
  return (
    <Row className="common-lists-wrapper" align="middle">
      <Col span={24}>
        <Row className="title-wrapper" justify="space-between">
          <Col span={12} className="title f-s-18 m-b-10">
            {props.title || ""}
          </Col>
          <Col>
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
        <Table dataSource={dataSource} columns={columns} />;
      </Col>
    </Row>
  )
}

export default CommonLists
