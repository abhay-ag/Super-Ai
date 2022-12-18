import React from "react";
import ReactEcharts from "echarts-for-react";

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    // extraCssText: "width: 800px",
    // formatter: function (params) {
    //   var tar = params[1];
    //   return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
    // },
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
      name: "In",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "top",
        fontSize: 15,
      },
      markLine: {
        data: [{
          type: "min"
        }],
        silent: false
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
