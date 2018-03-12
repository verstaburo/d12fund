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
        className: 'diagramm-balance',
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
        title: {
          text: '',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        areaspline: {
          classNames: 'diagramm-balance__plot',
        },
        series: {
          marker: {
            enabled: false,
          },
        },
      },
      series: [{
        type: 'areaspline',
        className: 'diagramm-balance__line',
        data: [
          { x: 0, y: 9.3 },
          { x: 2, y: 8.8 },
          { x: 3, y: 10 },
          { x: 4, y: 12.37 },
          { x: 6, y: 11 },
          { x: 7, y: 10.5 },
          { x: 9, y: 11 },
          { x: 10, y: 11.3 },
          { x: 11, y: 11 },
          { x: 12, y: 10 },
          { x: 13, y: 9.3 },
          { x: 15, y: 9.8 },
        ],
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
        threshold: 8,
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
