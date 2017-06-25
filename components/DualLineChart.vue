<template lang="pug">
#DualLineChart
  .charts
    .block
      .data
        .copy income<br /> growth
        .spike
          i.fa.fa-long-arrow-up(aria-hidden=true)
          .value {{ spike.income }}
      .chart
        canvas(id="ChartIncome",:width="width", :height="height")
    .block
      .data
        .copy rent burdened<br /> apartment households
        .spike
          i.fa.fa-long-arrow-up(aria-hidden=true)
          .value {{ spike.affordability }}
      .chart
        canvas(id="ChartAffordability",:width="width", :height="height")

</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#DualLineChart
  .charts
    > .block
      float left
      width calc(50% - 24px)
      border 1px solid lightgrey
      border-radius 3px
      &:first-child
        margin-right 20px
      > .data
        padding 20px 10px 0 10px
        > .copy
          font c1sb
          text-transform uppercase
          float left
        > .spike
          float right
          > i
            float left
            color green
            padding 2px 5px 0 0
          > .value
            float right
            font c3
</style>

<script>

let numeral = require('numeral')

import chartmixin from '~plugins/chart-mixin.js'

import json from '~/store/US Affordability (Landing).json'
import colors from '~/assets/colors.json'
export default {
  mixins: [ chartmixin ],
  props: ['width', 'height'],

  methods: {
    compile () {
      let data = {
        labels: [],
        datas: [[], []]
      }

      for (let key in json.data) {
        data.labels.push(key)
        data.datas[0].push(json.data[key][0])
        data.datas[1].push(json.data[key][1])
      }

      this.spike.affordability = numeral((data.datas[0][data.datas[0].length - 1] - data.datas[0][0]) / data.datas[0][0]).format('0%')
      this.spike.income = numeral((data.datas[1][data.datas[1].length - 1] - data.datas[1][0]) / data.datas[1][0]).format('0%')

      this.draw('income', data.labels, data.datas[0])

    },

    draw (type, labels, data) {

      if (this.charts[type] !== null) {
        this.charts[type].datasets.data = data
        this.charts[type].update()
      }

    },
  },
  data () {
    return {
      Chart: process.BROWSER_BUILD ? require('chart.js') : null,
      charts: {
        income: null,
        affordability: null,
      },
      spike: {
        affordability: 0,
        income: 0,
      }
    }
  },

  mounted () {
    this.compile()
  }
}
</script>
