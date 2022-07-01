/*
 * visionCharts.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import { Line } from 'vue-chartjs'
import numeral from 'numeral'
import sheets from '@/mixins/sheets'
import charts from '@/mixins/charts'
import pkg from '@/package'
export default {
  extends: Line,
  mixins: [ sheets ],
  data () {
    return {
      chartdata: {
        labels: [],
        datasets: [{
          ...charts.datasetLine,
          borderColor: pkg.cfg.colors.orange,
        }],
      },
      options: {
        ...charts.options,
        scales: {
          xAxes: [{
            ...charts.options.scales.xAxes[0],
            gridLines: { drawBorder: true, display: false, color: pkg.cfg.colors.seashell },
            ticks: {
              maxTicksLimit: 4,
              maxRotation: 0,
            },
          }],
          yAxes: [{
            ...charts.options.scales.yAxes[0],
            position: 'right',
            gridLines: { drawBorder: true, display: false, color: pkg.cfg.colors.seashell },
            ticks: {
              ...charts.options.scales.yAxes[0].ticks,
              maxTicksLimit: 4,
            },
          }],
        },
      },
    }
  },
  computed: {
    datas () { return this.sheet('main', 'visionIncomeAfford', 'Year') },
    labels () { return Object.keys(this.datas) },
    overThirty () { return Object.values(this.datas).map(r => r.Paying_Over_Thirty.replace(/\%/g, '')) },
    medianIncome () { return Object.values(this.datas).map(r => r.Median_Income.replace(/\$/g, '')) },
  },

}
