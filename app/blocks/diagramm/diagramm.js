/* eslint-disable no-unused-vars */
import Highcharts from 'highcharts';

const $ = window.$;

export default function diagramms() {
  $(() => {
    const balanceChart = Highcharts.chart('di-balance', {
      chart: {
        width: null,
        showAxes: false,
        backgroundColor: '#0a1b2f',
        parallelAxes: {
          visible: false,
        },
        height: 200,
      },
      title: {
        text: '',
      },
      xAxis: {
        visible: false,
      },
      yAxis: {
        plotLines: [{
          dashStyle: 'Dot',
          color: '#1a97fc',
          value: 10,
          width: 3,
          visible: true,
        }],
        tickAmount: 0,
        title: {
          text: '',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false,
          },
        },
      },
      series: [{
        yAxis: 0,
        type: 'area',
        data: [9, 8, 8.25, 12, 13, 11.5, 12.5, 12, 10, 8, 8.25, 9, 9.5],
        lineWidth: 3,
        fillColor: {
          linearGradient: [0, 0, 0, '100%'],
          stops: [
            [0, 'rgba(10, 38, 72, 0.6)'],
            [1, 'rgba(10, 27, 47, 0.6)'],
          ],
        },
        marker: {
          fillColor: '#fff',
          radius: 5,
        },
        lineColor: '#1a97fc',
        threshold: 10,
        tooltip: {
          headerFormat: '',
          pointFormat: '<b>$ {point.y}</b><br/>',
        },
      }],
    });
  });
}
/* eslint-enable no-unused-vars */
