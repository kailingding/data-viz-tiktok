const chartTotalDownload = document.querySelector("#chart-total-download");
const chartNumUsers = document.querySelector("#chart-num-users");
const chartMostFreqWords = document.querySelector("#chart-most-freq-words");
const chartMarketShares = document.querySelector("#chart-market-shares");

function plotTotalDownload(region) {
  let data = [];
  let config = {
    chart: {
      backgroundColor: '#f7f7f7'
    },

    title: {
      text: "Total Downloads"
    },

    yAxis: {
      title: {
        text: "Number of Downloads"
      }
    },

    xAxis: {
      title: {
        text: "Month"
      }
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [
      {
        name: "TikTok",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
  Highcharts.chart("chart-total-download", config);
}

function plotNumUsers(region) {
  let data = [];
  let config = {
    chart: {
      backgroundColor: '#f7f7f7'
    },

    title: {
      text: "Total Users"
    },

    yAxis: {
      title: {
        text: "Number of Users"
      }
    },

    xAxis: {
      title: {
        text: "Month"
      }
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [
      {
        name: "TikTok",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
  Highcharts.chart("chart-num-users", config);
}

function plotMostFreqWords(region) {
  let data = [];
  let config = {
    chart: {
      type: "packedbubble",
      backgroundColor: '#f7f7f7'
    },
    title: {
      text: "The Most Frequent Keywords"
    },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}:</b> {point.value}"
    },
    plotOptions: {
      packedbubble: {
        minSize: "30%",
        maxSize: "120%",
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
          splitSeries: false,
          gravitationalConstant: 0.02
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          filter: {
            property: "y",
            operator: ">",
            value: 250
          },
          style: {
            color: "black",
            textOutline: "none",
            fontWeight: "normal"
          }
        }
      }
    },
    series: [
      {
        name: "category 1",
        data: [
          {
            name: "item 1-1",
            value: 76.9
          },
          {
            name: "item 1-2",
            value: 20.7
          }
        ]
      },
      {
        name: "category 2",
        data: [
          {
            name: "item 2-1",
            value: 67.1
          },
          {
            name: "item 2-2",
            value: 42.5
          }
        ]
      }
    ]
  };
  Highcharts.chart("chart-most-freq-words", config);
}

function plotMarketShares(region) {
  let data = [];
  let config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      backgroundColor: '#f7f7f7',
      type: "pie"
    },
    title: {
      text: "Social Network Market Shares"
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    accessibility: {
      point: {
        valueSuffix: "%"
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %"
        }
      }
    },
    series: [
      {
        name: "Social Network Services",
        colorByPoint: true,
        data: [
          {
            name: "TikTok",
            y: 61.41,
            sliced: true,
            selected: true
          },
          {
            name: "Facebook",
            y: 11.84
          },
          {
            name: "Twitter",
            y: 10.85
          },
          {
            name: "Wechat",
            y: 4.67
          },
          {
            name: "Other",
            y: 2.61
          }
        ]
      }
    ]
  };
  Highcharts.chart("chart-market-shares", config);
}

function plotStatsCharts(region) {
  plotTotalDownload(region);
  plotNumUsers(region);
  plotMostFreqWords(region);
  plotMarketShares(region);
}

function init() {
  plotStatsCharts("ww");
}
document.addEventListener("DOMContentLoaded", init, false);
