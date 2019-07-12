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
  computed: {
    datas () { return this.sheet('main', 'visionIncomeAfford', 'Year') },
    labels () { return Object.keys(this.datas) },
    overThirty () { return Object.values(this.datas).map(r => r.Paying_Over_Thirty.replace(/\%/g, '')) },
    medianIncome () { return Object.values(this.datas).map(r => r.Median_Income.replace(/\$/g, '')) },
  },

}
