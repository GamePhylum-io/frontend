import React from "react"
import ReactEcharts from "echarts-for-react"

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    
    splitLine: {
      lineStyle: {
        color: ["rgba(255,255,255,0.10)"],
        width: 1,
        type: "solid",
      },
    },
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      itemStyle : {  
        normal : {  
            color:'#00FF00',  
            lineStyle:{  
                color:'#00FF00'  
            }  
        }  
    },  

    }
  ]
}
function Charts() {
  return (
    <div>
      <ReactEcharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        style={{ width: "100%", height: "600px" }}
      />
    </div>
  )
}

export default Charts
