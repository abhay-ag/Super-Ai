import React from "react";
import ReactEcharts from "echarts-for-react";

const option = {
  tooltip: {
    renderMode: "html",
    padding: 0,
    formatter: `<div style = "color: rgb(74,222,128); padding-left: 10px; padding-top: 10px; font-size: 0.9rem;">{a0}</div>
    <font style = "padding-left: 10px">2019</font> 
      <div style = "width: 100%; background-color: white;">
        {b0}: {c0} 
      </div>`,
    extraCssText: "width: 200px",
    appendToBody: true,
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    splitLine: { show: false },
    data: [
      "Expantion",
      "Replacement",
      "Involuntary Turnover",
      "Voluntary Turnover",
      "Discrepancies",
      "Net Change",
    ],
    axisLabel: {
      fontSize: 14,
      padding: [10, 10, 10, 10],
    },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 800,
  },
  series: [
    {
      name: "Placeholder",
      type: "bar",
      stack: "Total",
      barWidth: "95%",
      tooltip: {
        show: false,
      },
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
      data: [0, 379, 587, 355, 355, 0],
    },
    {
      name: "Starts",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "top",
        fontSize: 15,
      },
      tooltip: {
        borderColor: "rgb(200,200,200)",
        backgroundColor: "rgb(240,240,240)",
        borderWidth: 1,
        borderRadius: 3,
        textStyle: {
          fontWeight: "bold",
          fontSize: 14,
          color: "rgb(0,0,0)",
        },
      },
      data: [
        {
          value: 379,
          itemStyle: {
            color: "rgba(74,222,128, 0.6)",
          },
          label: {
            color: "rgba(74,222,128)",
            formatter: function (params) {
              return "+" + params.value;
            },
          },
        },
        {
          value: 326,
          itemStyle: {
            color: "rgba(74,222,128, 0.6)",
          },
          label: {
            color: "rgba(74,222,128)",
            formatter: function (params) {
              return "+" + params.value;
            },
          },
        },
        {
          value: 118,
          itemStyle: {
            color: "rgba(248,113,113, 0.6)",
          },
          label: {
            position: "bottom",
            color: "rgba(248,113,113)",
            formatter: function (params) {
              return "-" + params.value;
            },
          },
        },
        {
          value: 232,
          itemStyle: {
            color: "rgba(248,113,113, 0.6)",
          },
          label: {
            position: "bottom",
            color: "rgba(248,113,113",
            formatter: function (params) {
              return "-" + params.value;
            },
          },
        },
        {
          value: 7,
          itemStyle: {
            color: "rgba(156,163,175, 0.6)",
          },
          label: {
            color: "rgba(156,163,175)",
            formatter: function (params) {
              return "+" + params.value;
            },
          },
        },
        {
          value: 362,
          itemStyle: {
            color: "rgba(147 ,197 ,253, 0.6)",
          },
          label: {
            color: "rgba(147 ,197 ,253)",
            formatter: function (params) {
              return "+" + params.value;
            },
          },
        },
      ],
    },
  ],
};

function Chart() {
  return (
    <div className="h-3/4">
      <ReactEcharts
        option={option}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}

export default Chart;
