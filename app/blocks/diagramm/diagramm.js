/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import Highcharts from 'highcharts/highstock';

const $ = window.$;

export default function diagramms() {
  $(() => {
    if ($('#di-balance').length > 0) {
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
            marker: {
              fillColor: '#fff',
              width: 14,
              height: 14,
              states: {
                hover: {
                  lineWidthPlus: 0,
                  radiusPlus: 0,
                },
              },
              symbol: 'url(/assets/images/marker-small.svg)',
            },
            lineWidth: 2,
            states: {
              hover: {
                lineWidthPlus: 0,
                radiusPlus: 0,
              },
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
          lineWidth: 2,
          fillColor: {
            linearGradient: [0, 0, 0, '100%'],
            stops: [
              [0, 'rgba(10, 38, 72, 0.6)'],
              [1, 'rgba(10, 27, 47, 0.6)'],
            ],
          },
          marker: {
            fillColor: '#fff',
            width: 14,
            height: 14,
          },
          lineColor: '#1a97fc',
          threshold: 10,
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.y}</b><br/>',
            valuePrefix: '$',
          },
          states: {
            hover: {
              halo: false,
              lineWidthPlus: 0,
            },
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
    }
  });

  $(() => {
    if ($('#di-market').length > 0) {
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
              radius: 9.5,
              symbol: 'url(/assets/images/marker-main.svg)',
            },
            lineWidth: 4,
            states: {
              hover: {
                lineWidthPlus: 0,
                radiusPlus: 0,
              },
            },
          },
        },
        chart: {
          className: 'diagramm-price',
          type: 'areaspline',
          spacing: [0, 0, 0, 0],
          style: {
            'font-family': 'HelveticaNeue, Arial, sans-serif',
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
          className: 'diagramm-price__main-series',
          turboThreshold: 0,
          yAxis: 0,
          marker: {
            fillColor: '#fff',
            states: {
              hover: {
                lineWidthPlus: 0,
                radiusPlus: 0,
              },
            },
            symbol: 'url(/assets/images/marker-main.svg)',
          },
          states: {
            hover: {
              halo: false,
              lineWidthPlus: 0,
            },
          },
          zIndex: 2,
        },
        {
          className: 'diagramm-price__old-series',
          turboThreshold: 0,
          dashStyle: 'Dot',
          fillColor: '#112339',
          fillOpacity: '0,23',
          color: '#165db2',
          zIndex: 1,
          yAxis: 0,
          marker: {
            fillColor: '#fff',
            states: {
              hover: {
                lineWidthPlus: 0,
                radiusPlus: 0,
              },
            },
            symbol: 'url(/assets/images/marker-main.svg)',
          },
          states: {
            hover: {
              halo: false,
              lineWidthPlus: 0,
            },
          },
        }],
        tooltip: {
          dateTimeLabelFormats: {
            millisecond: '',
            second: '',
            minute: '',
            hour: '%b %e, %Y',
            day: '%b %e, %Y',
            week: '%a %b %e',
            month: '%b, %Y',
            year: '%Y"',
          },
          useHTML: true,
          split: false,
          snap: '50/50',
          borderWidth: 0,
          borderRadius: 10,
          backgroundColor: {
            linearGradient: [0, 0, 0, '100%'],
            stops: [
              [0, '#268dfc'],
              [1, '#337dfc'],
            ],
          },
          padding: 8,
          crosshairs: false,
          headerFormat: '<span class="diagramm-price__tooltip-top">{point.key}</span><br/>',
          pointFormat: '<span class="diagramm-price__tooltip-bottom">{point.y}</span>',
          style: {
            color: '#fff',
          },
        },
        yAxis: {
          className: 'diagramm-price__yaxis',
          gridLineWidth: 0,
          lineWidth: 0,
          labels: {
            useHTML: true,
            x: 10,
            y: 0,
            align: 'left',
            format: '{value}$',
            style: {
              'font-family': 'HelveticaNeue, Arial, sans-serif',
              'font-size': '16px',
              color: '#fff',
              'font-weight': '400',
              'padding-left': '2px',
            },
          },
          opposite: false,
          showFirstLabel: false,
        },
        xAxis: {
          className: 'diagramm-price__xaxis',
          tickLength: 0,
          gridLineDashStyle: 'Dot',
          gridLineWidth: 3,
          gridZIndex: 3,
          lineWidth: 0,
          minRange: 3600000,
          range: 2592000000,
          dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%b, %e',
            week: '%b, %Y',
            month: '%b, %Y',
            year: '%b, %Y',
          },
          labels: {
            style: {
              'font-family': 'HelveticaNeue, Arial, sans-serif',
              'font-size': '12px',
              'font-weight': '400',
              color: 'rgba(26, 151, 252, 0.502)',
              'padding-left': '8px',
            },
            useHTML: true,
            align: 'left',
            y: -26,
          },
        },
        credits: {
          enabled: false,
        },
      };
      let success1 = false;
      let success2 = false;
      $.getJSON('assets/data/market-price.json', (data) => {
        options.series[0].data = data;
        success1 = true;
      });
      $.getJSON('assets/data/stock-data.json', (data) => {
        options.series[1].data = data;
        success2 = true;
      });
      const waitJson = setInterval(() => {
        if (success1 && success2) {
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
          clearInterval(waitJson);
        }
      }, 100);
    }
  });
}
/* eslint-enable max-len */
/* eslint-enable no-unused-vars */
