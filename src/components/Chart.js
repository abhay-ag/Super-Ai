import React from "react";
import ReactEcharts from "echarts-for-react";

const option = {
  tooltip: {
    renderMode: "html",
    padding: 0,
    formatter: `<div class = "flex flex-col p-3 border">
      <font class = "text-green-400 text-base"> {a0} </font>
      <font class = "text-sm">2019</font>
    </div>
      <div class ="w-full flex flex-row justify-between px-3 py-1 bg-white">
        <font>{b0}</font>
        <font class = "text-green-400">{c0}</font>
      </div>
    `,
    extraCssText: "width: 200px",
    appendToBody: true,
  },
  grid: {
    left: "0%",
    right: "0%",
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
        borderWidth: 0.5,
        textStyle: {
          fontWeight: "bold",
          fontSize: 14,
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
    <div className="h-3/4 flex flex-row px-4">
      <div className="flex flex-col justify-end pb-4 items-center">
        <font className="font-bold text-sm">4.85k</font>
        <font className="font-thin text-xs text-center">
          {" "}
          Starting Headcount{" "}
        </font>
      </div>
      <div className="flex-1 flex flex-col">
        <ReactEcharts
          option={option}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <div className="flex flex-col justify-end pb-72 items-center">
        <font className="font-bold text-sm">5.23k</font>
        <font className="font-thin text-xs text-center">
          {" "}
          Ending Headcount{" "}
        </font>
      </div>
    </div>
  );
}

export default Chart;
