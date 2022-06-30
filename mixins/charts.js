/*
 * charts.js - globally shared chart styles
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import pkg from '@/package'
import numeral from 'numeral'
export default {
  datasetLine: {
    backgroundColor: pkg.cfg.colors.white,
    pointRadius: 0,
    pointHitRadius: 6,
    pointBackgroundColor: pkg.cfg.colors.white,
    pointHoverBackgroundColor: pkg.cfg.colors.white,
    pointHoverBorderColor: pkg.cfg.colors.black,
    pointHoverBorderWidth: 4,
    pointHoverRadius: 6,
    borderWidth: 3,
    data: [],
  },
  options: {
    tooltips: {
      backgroundColor: 'black',
      borderWidth: 1,
      yPadding: 14,
      xPadding: 20,
      displayTitle: false,
      displayColors: false,
      callbacks: {
        label: (item, data) => `${numeral(item.yLabel).format('0,0')} units`,
      },
    },
    legend: { display: false },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          fontSize: 10,
          maxTicksLimit: 6,
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 6,
          fontColor: pkg.cfg.colors.alum,
          callback: (label, index, labels) => numeral(label).format('0,0a'),
        },
      }],
    },
  }
}
