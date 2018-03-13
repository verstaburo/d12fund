/* eslint-disable no-unused-vars */
import Highcharts from 'highcharts/highstock';

const $ = window.$;

export default function diagramms() {
  $(() => {
    const balanceChart = Highcharts.stockChart('di-balance', {
      navigator: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      rangeSelector: {
        enabled: false,
      },
      chart: {
        type: 'areaspline',
        width: null,
        showAxes: false,
        backgroundColor: '#0a1b2f',
        className: 'diagramm-balance',
        height: 178,
        style: {
          'font-family': "'HelveticaNeue', 'Arial', sans-serif",
        },
        spacing: [0, 0, 0, 0],
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        gridLineWidth: 0,
        visible: false,
        crosshair: {
          width: 0,
        },
      },
      yAxis: {
        className: 'diagramm-balance__yaxis',
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
        plotLines: [{
          className: 'diagramm-balance__yaxis-0',
          dashStyle: 'Dot',
          color: '#1a97fc',
          value: 10,
          width: 3,
          visible: true,
          id: 'dpl-yaxis-0',
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
        minPadding: 0,
        title: {
          text: '',
        },
        crosshair: {
          width: 0,
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

  $(() => {
    const options = {
      plotOptions: {
        areaspline: {
          className: 'diagramm-price__plot',
          color: '#1a97fc',
          dataLabels: {
            className: 'diagram-price__label',
          },
          fillColor: '#0a2648',
          marker: {
            fillColor: '#fff',
            radius: 8,
          },
          lineWidth: 4,
          states: {
            hover: {
              lineWidthPlus: 0,
            },
          },
          tooltip: {
            headerFormat: '<span class="diagramm-price__tooltip-top">{point.key}</span><br/>',
            pointFormat: '<span class="diagramm-price__tooltip-bottom">{point.y}</span>',
          },
        },
      },
      chart: {
        className: 'diagramm-price',
        type: 'areaspline',
        spacing: [0, 0, 0, 0],
        style: {
          'font-family': "'HelveticaNeue', 'Arial', sans-serif",
        },
        height: 400,
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
      rangeSelector: {
        inputEnabled: false,
        buttons: [
          {
            type: 'day',
            count: '1',
            text: 'Day',
          },
          {
            type: 'week',
            count: '1',
            text: 'Week',
          },
          {
            type: 'month',
            count: '1',
            text: 'Month',
          },
          {
            type: 'year',
            count: '1',
            text: 'Year',
          },
        ],
        selected: 3,
      },
      navigator: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      series: [{
        turboThreshold: 0,
        yAxis: 0,
      }],
      yAxis: {
        gridLineWidth: 0,
        lineWidth: 0,
        labels: {
          useHTML: '<span class="diagramm-price__ylabels">{value}</span>',
          x: 10,
          y: 0,
          align: 'left',
          format: '{value}$',
        },
        opposite: false,
        showFirstLabel: false,
      },
      xAxis: {
        tickLength: 0,
        gridLineDashStyle: 'Dot',
        gridLineWidth: 3,
        gridZIndex: 6,
        lineWidth: 0,
        labels: {
          useHTML: '<span class="diagramm-price__xlabels">{value}</span>',
          align: 'left',
          y: -20,
        },
      },
      credits: {
        enabled: false,
      },
    };
    $.getJSON('assets/data/market-price.json', (data) => {
      options.series[0].data = data;
      const marketChart = Highcharts.stockChart('di-market', options);
      $('.highcharts-button').each((i, el) => {
        const type = $(el).find('text').text();
        $(el).attr('data-type', type);
        if ($(el).hasClass('highcharts-button-disabled')) {
          $(`[data-target-button="${type}"]`).addClass('disabled');
        } else {
          $(`[data-target-button="${type}"]`).removeClass('disabled');
        }
        if ($(el).hasClass('highcharts-button-pressed')) {
          $(`[data-target-button="${type}"]`).addClass('active');
        } else {
          $(`[data-target-button="${type}"]`).removeClass('active');
        }
      });
      $(document).on('click', '.js-filter', (evt) => {
        const self = $(evt.target).hasClass('.js-filter') ? $(evt.target) : $(evt.target).closest('.js-filter');
        const targetButton = $(self).attr('data-target-button');
        $(`[data-type="${targetButton}"]`).click();
        $('.js-filter').not(self).removeClass('active');
        $(self).addClass('active');
      });
    });
  });
}
/* eslint-enable no-unused-vars */
