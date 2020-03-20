const chartTotalDownload = document.querySelector("#chart-total-download");
const chartNumUsers = document.querySelector("#chart-num-users");
const chartMostFreqWords = document.querySelector("#chart-most-freq-words");
const chartMarketShares = document.querySelector("#chart-market-shares");

function plotTotalDownload() {
  let data = [];
  let config = {
    chart: {
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: "Top Social Media Apps Downloads in 2019"
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

function plotNumUsers() {
  let data = [];
  let config = {
    chart: {
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: "Total Downloads Worldwide"
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

function plotUserAges() {
  let config = {
    chart: {
      type: "item",
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: "TikTok's User Age Distribution"
    },

    subtitle: {
      text: "Source: App Ape Lab."
    },
    series: [
      {
        name: "Percentage",
        keys: ["name", "y", "color", "label"],
        data: [
          ["10-19", 385, "#31A9FE", "10-19"],
          ["20-29", 288, "#8631FE", "20-29"],
          ["30-39", 138, "#FFAE80", "30-39"],
          ["40-49", 138, "#ED31FE", "40-49"],
          ["50+", 51, "#3142FE", "50+"]
        ],
        dataLabels: {
          enabled: true,
          format: "{point.label}"
        },
        center: ["50%", "88%"],
        size: "170%",
        startAngle: -100,
        endAngle: 100
      }
    ],

    tooltip: {
      formatter: function() {
        return "Age " + this.key + ": " + this.y / 10 + "%";
      }
    }
  };

  Highcharts.chart("chart-user-ages", config);
}

function plotMonthlyRatings() {
  let config = {
    chart: {
      type: "streamgraph",
      marginBottom: 90,
      zoomType: "x",
      backgroundColor: "#f7f7f7"
    },

    colors: [
      "#00602B", // 5-star
      "#92D14F", // 4-star
      "#FEC923", // 3-star
      "#FA9924", // 2-star
      "#EA0001" // 1-star
    ],

    title: {
      floating: true,
      align: "center",
      text: "TikTok's Monthly Ratings on App Store"
    },

    subtitle: {
      floating: true,
      align: "center",
      y: 30,
      text: "Source: AppBot.co"
    },

    xAxis: {
      maxPadding: 0,
      offset: 30,
      type: "category",
      crosshair: true,
      categories: [
        "Apr 2018",
        "May 2018",
        "Jun 2018",
        "Jul 2018",
        "Aug 2018",
        "Sep 2018",
        "Oct 2018",
        "Nov 2018",
        "Dec 2018",
        "Jan 2019",
        "Feb 2019",
        "Mar 2019",
        "Apr 2019",
        "May 2019",
        "Jun 2019",
        "Jul 2019",
        "Aug 2019",
        "Sep 2019",
        "Oct 2019",
        "Nov 2019",
        "Dec 2019",
        "Jan 2020",
        "Feb 2020"
      ],
      labels: {
        align: "left",
        reserveSpace: false,
        rotation: 320
      },
      lineWidth: 0,
      margin: 0,
      tickWidth: 0
    },

    yAxis: {
      visible: false,
      startOnTick: false,
      endOnTick: false
    },

    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "top",
      y: 30
    },
    colors: ["#a2a6d1", "#8dc8ef", "#8b6fd4", "#bd9fc1", "#e5a6b3"],
    series: [
      {
        name: "5-star",
        data: [
          32093,
          70836,
          13570,
          121833,
          90820,
          65205,
          76288,
          91934,
          103846,
          135744,
          105289,
          100421,
          99231,
          96250,
          113144,
          135576,
          154151,
          158399,
          171379,
          199539,
          266589,
          290435,
          187956
        ]
      },
      {
        name: "4-star",
        data: [
          1736,
          2811,
          2142,
          5083,
          4476,
          2483,
          2879,
          3650,
          4266,
          5204,
          4465,
          4660,
          4038,
          3992,
          4933,
          5614,
          5340,
          5429,
          5081,
          5355,
          7200,
          7274,
          4551
        ]
      },
      {
        name: "3-star",
        data: [
          888,
          1558,
          1940,
          2290,
          2589,
          1115,
          1351,
          1737,
          2099,
          2455,
          2419,
          2619,
          1893,
          1638,
          1930,
          2116,
          2180,
          2012,
          1901,
          1797,
          2322,
          2219,
          1404
        ]
      },
      {
        name: "2-star",
        data: [
          694,
          1313,
          1619,
          1178,
          1689,
          681,
          883,
          1185,
          1455,
          1538,
          2097,
          2019,
          1159,
          1029,
          1176,
          1351,
          1436,
          1369,
          1240,
          1039,
          1268,
          1493,
          787
        ]
      },
      {
        name: "1-star",
        data: [
          1948,
          5582,
          4859,
          2688,
          6755,
          2504,
          4973,
          5566,
          5378,
          5825,
          10772,
          8174,
          4074,
          3395,
          4446,
          4470,
          4590,
          4712,
          4428,
          4163,
          4742,
          5467,
          3276
        ]
      }
    ]
  };

  Highcharts.chart("chart-monthly-ratings", config);
}

function plotNA() {
  var data = [
    ["us", 1],
    ["ca", 1],
    ["mx", 1]
  ];

  // Create the chart
  let config = {
    chart: {
      map: "custom/north-america",
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: ""
    },

    subtitle: {
      text:
        'Source map: <a href="http://code.highcharts.com/mapdata/custom/north-america.js">North America</a>'
    },
    colors: ["#a2a6d1"],
    series: [
      {
        data: data,
        name: "NA",
        states: {
          hover: {
            color: "#BADA55"
          }
        }
      }
    ]
  };
  Highcharts.chart("chart-na", config);
}

function plotSearchInterest(data) {
  let config = {
    chart: {
      type: "tilemap",
      inverted: true,
      height: "80%",
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: 'Google Search Interest Index of Keyword "TikTok" by State'
    },

    subtitle: {
      text: "Source: Google Trends"
    },

    xAxis: {
      visible: false
    },

    yAxis: {
      visible: false
    },

    colorAxis: {
      dataClasses: [
        {
          from: 0,
          to: 71,
          color: "#FDD1B8",
          name: "0-70"
        },
        {
          from: 71,
          to: 81,
          color: "#fda2ae",
          name: "71-80"
        },
        {
          from: 81,
          to: 91,
          color: "#ab73a0",
          name: "81-90"
        },
        {
          from: 91,
          to: 96,
          color: "#594492",
          name: "90-95"
        },
        {
          from: 96,
          color: "#352366",
          name: "96-100"
        }
      ]
    },

    tooltip: {
      headerFormat: "",
      pointFormat:
        "The Search Interest of <b> {point.name}</b> is <b>{point.value}</b>"
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.hc-a2}",
          color: "#000000",
          style: {
            textOutline: false
          }
        }
      }
    },

    series: [
      {
        name: "Search Interest",
        data: data
      }
    ]
  };

  Highcharts.chart("chart-search-interest", config);
}

async function loadJSON(path) {
  let response = await fetch(path);
  let dataset = await response.json();
  return dataset;
}

function plotStatsCharts() {
  plotTotalDownload();
  plotNumUsers();
  // plotMostFreqWords(region);
  // plotMarketShares(region);
  plotNA();
  plotUserAges();
  plotMonthlyRatings();
  searchPromise = loadJSON("./assets/data/search-interests.json");
  searchPromise.then(function(data) {
    plotSearchInterest(data);
  });
}

function init() {
  plotStatsCharts();
}
document.addEventListener("DOMContentLoaded", init, false);

/*
function plotMostFreqWords(region) {
  let data = [];
  let config = {
    chart: {
      type: "packedbubble",
      backgroundColor: "#f7f7f7"
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
*/

/*

function plotMarketShares(region) {
  let data = [];
  let config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      backgroundColor: "#f7f7f7",
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
*/
