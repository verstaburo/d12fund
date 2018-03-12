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
        gridLineWidth: 0,
        visible: false,
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
        plotLines: [{
          dashStyle: 'Dot',
          color: '#1a97fc',
          value: 10,
          width: 3,
          visible: true,
          label: {
            text: '100.00',
            style: {
              color: '#6e93bd',
              'font-size': '10px',
            },
            textAlign: 'left',
            x: 0,
            y: -10,
          },
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
        type: 'areaspline',
        data: [9, 8, 12.25, 10.5, 11, 9, 9.5, 9.6],
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
          pointFormat: '<b>{point.y}</b><br/>',
          valuePrefix: '$',
        },
      }],
      tooltip: {
        backgroundColor: '#0a1b2f',
        borderWidth: 0,
        borderRadius: '2',
        shadow: false,
        style: {
          color: '#1a97fc',
          fontSize: '11px',
        },
      },
    });
  });
}
/* eslint-enable no-unused-vars */
