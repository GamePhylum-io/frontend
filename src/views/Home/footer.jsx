import React from "react"
import { Row, Col, Button } from "antd"
import logo from "@/assets/img/logo.png"
import discord from "@/assets/img/footer/i_discord2.png"
import medium from "@/assets/img/footer/i_medium2.png"
import twitter from "@/assets/img/footer/i_twitter2.png"
function Footer() {
  return (
    <div className="footer-wrapper">
      <Row justify="space-between">
        <Col span={10}>
          <img src={logo} alt="" />
          <div className="m-t-20">
            GamePhylum is a Web3 platform that vertical to the GameFi ecosystem.
            In the early stage, It takes value to users by core feature include
            P2E Game on-chain data analysis tool, Profound InSight and
            Comprehensive Strategy etc.
          </div>
        </Col>
        <Col span={8} className="right">
          <Row className="m-t-20" justify="space-between">
            <Col>
              <h4 className="m-b-20">Community</h4>
              <p
                className="icon"
                onClick={() => {
                  window.open("https://twitter.com/GamePhylum")
                }}
              >
                <img src={twitter} alt="" />
                <span>Twitter</span>
              </p>

              <p
                className="icon"
                onClick={() => {
                  window.open("https://medium.com/@GamePhylum")
                }}
              >
                <img src={medium} alt="" />
                <span>Medium</span>
              </p>

              <p
                className="icon"
                onClick={() => {
                  window.open("https://discord.gg/d85gwWVjm4")
                }}
              >
                <img src={discord} alt="" />
                <span>Discord</span>
              </p>
            </Col>

            <Col>
              <h4 className="m-b-20">Contact Us</h4>
              <p
                onClick={() => {
                  window.open("https://t.me/crypto0xcarl")
                }}
              >
                Cooperation
              </p>
              <p>Game Listing</p>
              <p>Any Feedback</p>
            </Col>
            <Col>
              <h4 className="m-b-20">About Us</h4>
              <p>Company</p>
              <p>Pricing</p>
              <p>Service</p>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col>
              <Button
                onClick={() => {
                  window.open("https://forms.gle/PKgoYm994jPU5gVC6")
                }}
                type="primary"
              >
                Apply Join The GamePhylum DAO
              </Button>
            </Col>
            <Col span={10}>
              <span>@ 2022 GamePhylum Pte.Ltd.All Rights Reserved</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
