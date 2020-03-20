/* US monthly ratings Steam chart */

function plotMonthlyRatings() {

  let config = {

    chart: {
      type: 'streamgraph',
      marginBottom: 90,
      zoomType: 'x',
      backgroundColor: '#f7f7f7'
    },

    colors: [
      "#00602B", // 5-star
      "#92D14F", // 4-star
      "#FEC923", // 3-star
      "#FA9924", // 2-star
      "#EA0001"  // 1-star
    ],

    title: {
      floating: true,
      align: 'center',
      text: 'Appstore Monthly Ratings'
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
      categories: [
        "Apr 2018", "May 2018", "Jun 2018", "Jul 2018", "Aug 2018",
        "Sep 2018", "Oct 2018", "Nov 2018", "Dec 2018", "Jan 2019",
        "Feb 2019", "Mar 2019", "Apr 2019", "May 2019", "Jun 2019",
        "Jul 2019", "Aug 2019", "Sep 2019", "Oct 2019", "Nov 2019",
        "Dec 2019", "Jan 2020", "Feb 2020"
      ],
      labels: {
        align: 'left',
        reserveSpace: false,
        rotation: 270
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

    series: [
      {
        name: "5-star",
        data: [32093, 70836, 13570, 121833, 90820, 65205, 76288, 91934, 103846, 135744, 105289, 100421, 99231, 96250, 113144, 135576, 154151, 158399, 171379, 199539, 266589, 290435, 187956]
      },
      {
        name: "4-star",
        data: [1736, 2811, 2142, 5083, 4476, 2483, 2879, 3650, 4266, 5204, 4465, 4660, 4038, 3992, 4933, 5614, 5340, 5429, 5081, 5355, 7200, 7274, 4551]
      },
      {
        name: "3-star",
        data: [888, 1558, 1940, 2290, 2589, 1115, 1351, 1737, 2099, 2455, 2419, 2619, 1893, 1638, 1930, 2116, 2180, 2012, 1901, 1797, 2322, 2219, 1404]
      },
      {
        name: "2-star",
        data: [694, 1313, 1619, 1178, 1689, 681, 883, 1185, 1455, 1538, 2097, 2019, 1159, 1029, 1176, 1351, 1436, 1369, 1240, 1039, 1268, 1493, 787]

      },
      {
        name: "1-star",
        data: [1948, 5582, 4859, 2688, 6755, 2504, 4973, 5566, 5378, 5825, 10772, 8174, 4074, 3395, 4446, 4470, 4590, 4712, 4428, 4163, 4742, 5467, 3276]
      }
    ]

  };

  Highcharts.chart('chart-monthly-ratings', config);
}


function plotUserAges() {
  
  let config = {

    chart: {
      type: 'item',
      backgroundColor: '#f7f7f7'
    },

    title: {
      text: 'User Age Distribution'
    },

    subtitle: {
      text: 'Source: App Ape Lab.'
    },

    series: [{
      name: 'Percentage',
      keys: ['name', 'y', 'color', 'label'],
      data: [
        
        ['10-19', 383, '#64A12D', '10-19'],
        ['20-29', 287, '#EB001F', '20-29'],
        ['30-39', 138, '#5C78F7', '30-39'],
        ['40-49', 138, '#FAD955', '40-49'],
        ['50+', 51, '#000000', '50+']
      ],
      dataLabels: {
        enabled: true,
        format: '{point.label}'
      },
      center: ['50%', '88%'],
      size: '170%',
      startAngle: -100,
      endAngle: 100
    }],

    tooltip: {
      formatter: function () {
        return "Age " + this.key + ": " + (this.y / 10) + "%";
      }
    }

  };

  Highcharts.chart('chart-user-ages', config);
}


function setup() {
  plotMonthlyRatings();
  plotUserAges();
}
document.addEventListener('DOMContentLoaded', setup, false);
