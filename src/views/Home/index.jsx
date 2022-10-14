import React, { useState, useMemo } from "react"
import "./index.less"
import { Radio, Tabs, Col, Row, Button, Anchor } from "antd"
import { useTranslation } from "react-i18next"

import ArticleList from "./articleList"
import Introduce from "./introduce"
import Footer from "./footer"
import api from "@/api"

const { Link } = Anchor
function Home() {
  const { t } = useTranslation()
  const [researchList, setResearchList] = useState([])
  const [raidersList, setRaidersList] = useState([])
  useMemo(async () => {
    // const { code,data:sourceData } = await api.common.getArtCategory()

    // let ids = Object.keys(sourceData).map((e)=>(sourceData[e].id))

    // ids.forEach(async(item)=>{

    //   const { code:c,data:d } = await api.common.getArtList({ category_id: item, page: 1 })

    //   if(item===1){
    //     setResearchList(d.data)
    //   }else{
    //     setRaidersList(d.data)
    //   }

    // })
    let data = await api.common.getAllArticles({
      limit: 100,
      skip: 0,
    })
    data = data.sort((a,b)=>(b.weight-a.weight))
    if(data.length>0){
      const strategy = data.filter((e)=>(e.category ==="Strategy"))
      const raidersList = data.filter((e)=>(e.category !=="Strategy"))
       setResearchList(strategy)
       setRaidersList(raidersList)

    }
   
   
    // const data = await api.common.getArticles({ category: "Strategy" })
   
  }, [])
  return (
    <div className="home-page">
      <div className="banner">
        <div className="content">
          <div className="m-b-30">
            <h3>
              Game&nbsp;
              <span className="main-color">Data Aggregation </span>Platform
            </h3>
            <h3> Built For The Future New</h3>
            <h3> Wave of Web3 Game</h3>
          </div>
          <div className="m-t-30">
            <h6>
              Where You Can Learn
              <span className="main-color"> Game Strategy</span>
            </h6>
            <h6>
              & Check Game <span className="main-color">On-Chain Data</span>
            </h6>
            <h6>
              And Discover <span className="main-color">New Game</span>
            </h6>
          </div>
          <div>
            <h4>
              <Anchor affix={false}>
                <Link
                  href="#explore"
                  title="Explore Now"
                  className="btn"
                ></Link>
              </Anchor>
            </h4>
            <h6>
              Open The <span className="main-color">GamePhylum</span> Know
              Everything About GameFi
            </h6>
          </div>
        </div>
      </div>
      <div className="body">
        <ArticleList data={researchList} type="Strategy" />
        <ArticleList data={raidersList} type="Insight" />
        <Introduce />
        <Footer />
      </div>
    </div>
  )
}

export default Home
