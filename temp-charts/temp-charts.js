/* US monthly ratings Steam chart */

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
      text: "Appstore Monthly Ratings"
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

function plotUserAges() {
  let config = {
    chart: {
      type: "item",
      backgroundColor: "#f7f7f7"
    },

    title: {
      text: "User Age Distribution"
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

function setup() {
  plotMonthlyRatings();
  plotUserAges();
  searchPromise = loadJSON("search-interests.json");
  searchPromise.then(function(data) {
    plotSearchInterest(data);
  });
}
document.addEventListener("DOMContentLoaded", setup, false);
