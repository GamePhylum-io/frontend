import React, { useEffect, useState } from "react"
import { DownOutlined } from "@ant-design/icons"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import api from "@/api"
import Charts from "./charts"
import { Row, Col, Dropdown, Menu, Space, Tabs, Image } from "antd"
import IconFont from '@/component/IconFont'
import {  useNavigate } from "react-router-dom"
import "./index.less"

const { TabPane } = Tabs
function Details() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const params = useParams()
  const [details, setDetails] = useState(null)
  const [linkData, setLinkData] = useState([])
  const [InvestorData, setInvestorData] = useState([])
  const init = async () => {
    const { data } = await api.common.gameTokenDetails(params)
    setDetails(data)
    const { data: assetDetails } = await api.common.getPhylumAssetDetails({
      assets: data.name,
    })
    setLinkData(assetDetails.links)
    setInvestorData(assetDetails.organizations)

    console.log(assetDetails)
  }

  const CommunityMenu = (
    <Menu
      items={[
        {
          label: <div onClick={() => goHref("Twitter")}>{t("Twitter")}</div>,
          key: "1",
        },
        {
          label: <div onClick={() => goHref("Discord")}>{t("Discord")}</div>,
          key: "2",
        },
        {
          label: <div onClick={() => goHref("Telegram")}>{t("Telegram")}</div>,
          key: "3",
        },
      ]}
    />
  )

  const ResourceMenu = (
    <Menu
      items={[
        {
          label: <div onClick={() => goHref("Medium")}>{t("Medium")}</div>,
          key: "1",
        },
        {
          label: (
            <div onClick={() => goHref("White Paper")}>{t("White Paper")}</div>
          ),
          key: "2",
        },
        {
          label: (
            <div onClick={() => goHref("GamePhyLum Research")}>
              {t("GamePhyLum Research")}
            </div>
          ),
          key: "3",
        },
      ]}
    />
  )

  const goHref = (key) => {
    linkData.forEach((item) => {
      if (item.name === key) {
        window.open(item.link)
      }
      if (item.name === "Whitepaper" && key === "White Paper") {
        window.open(item.link)
      }
    })
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <div className="assetscreener-details-page">
       <IconFont
        onClick={() => navigate(-1)}
        type="icon-fanhui"
        className="m-b-20"
        size={26}
      />
      {details && (
        <div>
          <div className="header">
            <Row gutter={20} align="middle">
              <Col flex="57px">
                <img className="img" src={details.imgurl} alt="" />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <span>{details.name}</span>
                    <span className="p-20">{details.current_price}</span>
                    <span>({details.change_oned})</span>
                  </Col>
                  <Col span={24}>
                    <span> {t("Project Intro")} xxxxxxxxxxxx(briefly)</span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={80} align="middle" className="m-t-20">
              <Col>Website</Col>
              <Col>
                <Dropdown overlay={CommunityMenu}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Community
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown overlay={ResourceMenu}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Resource
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </div>
          <div className="body">
            <Tabs defaultActiveKey="1">
              <TabPane tab={t("Investor")} key="1">
                <Row gutter={[20,20]}>
                  {InvestorData.map((item, index) => {
                    return item.avatar ? (
                      <Col>
                        <Image
                          width={100}
                          height={100}
                          preview={false}
                          src={item.avatar}
                          fallback="data:image/png;base64,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"
                        />
                      </Col>
                    ) : (
                      ""
                    )
                  })}
                </Row>
              </TabPane>
              <TabPane tab={t("Research")} key="2"></TabPane>
              <TabPane tab={t("Market")} key="3"></TabPane>
              <TabPane tab={t("Price")} key="4">
              <Charts/>
              </TabPane>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  )
}

export default Details
