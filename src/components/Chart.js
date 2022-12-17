import React from "react";
import ReactEcharts from "echarts-for-react";

const option = {
  title: {
    text: "Waterfall Chart",
    subtext: "Living Expenses in Shenzhen",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: function (params) {
      var tar = params[1];
      return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    splitLine: { show: true },
    data: ["In", "In", "Out", "Out", "Occupancies", "Exhange"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Placeholder",
      type: "bar",
      stack: "Total",
      itemStyle: {
        borderColor: "transparent",
        color: "transparent",
      },
      emphasis: {
        itemStyle: {
          borderColor: "transparent",
          color: "transparent",
        },
      },
    //   data: [0, 2600 , 1400, 1200, 300, 0],
    },
    {
      name: "Life Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "inside",
      },
      data: [2900, 1200, 300, 200, 900, 300],
    },
  ],
};

function Chart() {
  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
}

export default Chart;
