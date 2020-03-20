function plotTotalDownload() {
  let data = [];
  let config = {
    chart: {
      backgroundColor: '#f7f7f7'
    },

    title: {
      text: 'Top Social Media Apps Downloads in 2019'
    },

    yAxis: {
      title: {
        text: 'Number of Downloads'
      }
    },

    xAxis: {
      title: {
        text: 'Month'
      }
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
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
        name: 'TikTok',
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
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  };
  Highcharts.chart('chart-total-download', config);
}

function plotNumUsers() {
  let data = [];
  let config = {
    chart: {
      backgroundColor: '#f7f7f7'
    },

    title: {
      text: 'Total Downloads Worldwide'
    },

    yAxis: {
      title: {
        text: 'Number of Users'
      }
    },

    xAxis: {
      title: {
        text: 'Month'
      }
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
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
        name: 'TikTok',
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
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }
      ]
    }
  };
  Highcharts.chart('chart-num-users', config);
}

function plotUserAges() {
  let config = {
    chart: {
      type: 'item',
      backgroundColor: '#f7f7f7',
      height: '100%'
    },

    title: {
      text: 'TikTok\'s User Age Distribution'
    },

    subtitle: {
      text: 'Source: App Ape Lab.'
    },
    series: [
      {
        name: 'Percentage',
        keys: ['name', 'y', 'color', 'label'],
        data: [
          ['10-19', 385, '#31A9FE', '10-19'],
          ['20-29', 288, '#8631FE', '20-29'],
          ['30-39', 138, '#FFAE80', '30-39'],
          ['40-49', 138, '#ED31FE', '40-49'],
          ['50+', 51, '#3142FE', '50+']
        ],
        dataLabels: {
          enabled: false
        },
        center: ['50%', '75%'],
        size: '100%',
        startAngle: -100,
        endAngle: 100
      }
    ],

    tooltip: {
      formatter: function () {
        return 'Age ' + this.key + ': ' + this.y / 10 + '%';
      }
    }
  };

  Highcharts.chart('chart-user-ages', config);
}

function plotUserAgesByGender(data) {
  let config = {
    chart: {
      height: '95%',
      backgroundColor: '#f7f7f7'
    },

    title: {
      text: 'Tiktok\'s User Age Distribution by Gender'
    },
    subtitle: {
      text: 'Source: App Ape Lab.'
    },
    series: [{
      type: 'sunburst',
      data: data,
      allowDrillToNode: true,
      cursor: 'pointer',
      dataLabels: {
        format: '{point.name}',
        filter: {
          property: 'innerArcLength',
          operator: '>',
          value: 16
        }
      },
      levels: [{
        level: 1,
        levelIsConstant: false,
        dataLabels: {
          filter: {
            property: 'outerArcLength',
            operator: '>',
            value: 64
          }
        }
      }, {
        level: 2,
        colorByPoint: true
      }]

    }],
    tooltip: {
      formatter: function () {
        if (!this.point.parent) {
          // layer 0, center
          return false;
        } else if (this.point.gender) {
          // layer 2, age
          return this.point.gender + ' aged ' + this.key + ': ' + this.point.value + '%';
        } else {
          // layer 1, gender
          return this.key + ': ' + this.point.value + '%';
        }
      }
    }
  };

  Highcharts.getOptions().colors.splice(0, 0, 'transparent');
  Highcharts.chart('chart-user-ages-by-gender', config);
}

function plotMonthlyRatings(data) {
  if (data) {
    let config = {
      chart: {
        type: 'streamgraph',
        marginBottom: 90,
        zoomType: 'x',
        backgroundColor: '#f7f7f7'
      },

      colors: [
        '#00602B', // 5-star
        '#92D14F', // 4-star
        '#FEC923', // 3-star
        '#FA9924', // 2-star
        '#EA0001', // 1-star
      ],

      title: {
        floating: true,
        align: 'center',
        text: 'TikTok\'s Monthly Ratings on App Store'
      },

      subtitle: {
        floating: true,
        align: 'center',
        y: 30,
        text: 'Source: AppBot.co'
      },

      xAxis: {
        maxPadding: 0,
        offset: 30,
        type: 'category',
        crosshair: true,
        categories: data.category,
        labels: {
          align: 'left',
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
        align: 'center',
        verticalAlign: 'top',
        y: 30
      },
      colors: ['#a2a6d1', '#8dc8ef', '#8b6fd4', '#bd9fc1', '#e5a6b3'],
      series: data.series
    };

    Highcharts.chart('chart-monthly-ratings', config);
  }
}

function plotNA() {
  let data = [
    ['us', 1],
    ['ca', 1],
    ['mx', 1]
  ];

  // Create the chart
  let config = {
    chart: {
      map: 'custom/north-america',
      backgroundColor: '#f7f7f7'
    },

    title: {
      text: ''
    },

    subtitle: {
      text:
        'Source map: <a href="http://code.highcharts.com/mapdata/custom/north-america.js">North America</a>'
    },
    colors: ['#a2a6d1'],
    series: [
      {
        data: data,
        name: 'NA',
        states: {
          hover: {
            color: '#BADA55'
          }
        }
      }
    ]
  };
  Highcharts.chart('chart-na', config);
}

function plotSearchInterest(data) {
  let config = {
    chart: {
      type: 'tilemap',
      inverted: true,
      height: '625px',
      backgroundColor: '#f7f7f7'
    },

    title: {
      text: 'Google Search Interest Index of Keyword \'TikTok\' by State'
    },

    subtitle: {
      text: 'Source: Google Trends'
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
          color: '#FDD1B8',
          name: '0-70'
        },
        {
          from: 71,
          to: 81,
          color: '#fda2ae',
          name: '71-80'
        },
        {
          from: 81,
          to: 91,
          color: '#ab73a0',
          name: '81-90'
        },
        {
          from: 91,
          to: 96,
          color: '#594492',
          name: '90-95'
        },
        {
          from: 96,
          color: '#352366',
          name: '96-100'
        }
      ]
    },

    tooltip: {
      headerFormat: '',
      pointFormat:
        '{point.name}: {point.value}'
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.hc-a2}',
          color: '#000000',
          style: {
            textOutline: false
          }
        }
      }
    },

    series: [
      {
        name: 'Search Interest',
        data: data
      }
    ]
  };

  Highcharts.chart('chart-search-interest', config);
}

async function loadJSON(path) {
  let response = await fetch(path);
  let dataset = await response.json();
  return dataset;
}

function plotStatsCharts() {
  agPromise = loadJSON('./assets/data/user-ages-by-gender.json');
  mrPromise = loadJSON('./assets/data/monthly-ratings.json');
  siPromise = loadJSON('./assets/data/search-interests.json');

  plotTotalDownload();
  plotNumUsers();
  plotNA();
  plotUserAges();
  plotUserAgesByGender();
  plotMonthlyRatings();

  agPromise.then(function (data) {
    plotUserAgesByGender(data);
  });
  mrPromise.then(function (data) {
    plotMonthlyRatings(data);
  });
  siPromise.then(function (data) {
    plotSearchInterest(data);
  });
}

function init() {
  plotStatsCharts();
}
document.addEventListener('DOMContentLoaded', init, false);

/*

function plotMarketShares() {
  let data = [];
  let config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      backgroundColor: '#f7f7f7',
      type: 'pie'
    },
    title: {
      text: 'Social Network Market Shares'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      {
        name: 'Social Network Services',
        colorByPoint: true,
        data: [
          {
            name: 'TikTok',
            y: 61.41,
            sliced: true,
            selected: true
          },
          {
            name: 'Facebook',
            y: 11.84
          },
          {
            name: 'Twitter',
            y: 10.85
          },
          {
            name: 'Wechat',
            y: 4.67
          },
          {
            name: 'Other',
            y: 2.61
          }
        ]
      }
    ]
  };
  Highcharts.chart('chart-market-shares', config);
}
*/
