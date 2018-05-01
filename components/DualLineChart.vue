<template lang="pug">
#DualLineChart
  .charts
    .block
      .data
        .copy rent burdened<br /> apartment homes
        .spike
          i.fa.fa-long-arrow-up(aria-hidden=true,v-if="spike.income.replace('%', '') > 0")
          i.fa.fa-long-arrow-down(aria-hidden=true,v-if="spike.income.replace('%', '') < 0")
          .value {{ spike.income }}
      .chart
        // tooltip
        canvas(id="Chart-income",:width="width", :height="height")
    .block
      .data
        .copy income<br /> growth
        .spike
          i.fa.fa-long-arrow-up(aria-hidden=true,v-if="spike.affordability.replace('%', '') > 0")
          i.fa.fa-long-arrow-down(aria-hidden=true,v-if="spike.affordability.replace('%', '') < 0")
          .value {{ spike.affordability }}
      .chart
        // tooltip(align="left")
        canvas(id="Chart-affordability",:width="width", :height="height")

</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#DualLineChart
  .charts
    > .block
      float left
      width calc(50% - 12px)
      border 1px solid lightgrey
      border-radius 6px
      &:first-child
        margin-right 20px
      > .chart
        position relative
        > .tooltip
          top -25px
          right 1px
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
            padding 2px 5px 0 0
            &.fa-long-arrow-up
              color lime
            &.fa-long-arrow-down
              color tomato
          > .value
            float right
            font c3
@import '../assets/stylus/DualLineChart-mobile.styl'
</style>

<script>

import chartmixin from '~plugins/chart-mixin.js'
import json from '~/static/US Affordability (Landing).json'
import colors from '~/assets/colors.json'
// import tooltip from '~components/tooltip.vue'
import inViewport from 'vue-in-viewport-mixin'

export default {
  mixins: [ chartmixin, inViewport ],
  // components: { tooltip },
  methods: {
    render () {

      const numeral = window.numeral
      let data = {
        labels: [],
        datas: [[], []]
      }

      for (let key in json.data) {
        data.labels.push(key)
        data.datas[1].push(json.data[key][1])
        data.datas[0].push(json.data[key][0])
      }

      this.spike.income = numeral((data.datas[0][data.datas[0].length - 1] - data.datas[0][0]) / data.datas[0][0]).format('0%')
      this.spike.affordability = numeral((data.datas[1][data.datas[1].length - 1] - data.datas[1][0]) / data.datas[1][0]).format('0%')

      this.draw('income', data.labels, data.datas[0])
      this.draw('affordability', data.labels, data.datas[1])

    },

    draw (type, labels, data) {

      /*
      if (this.charts[type] !== null) {
        this.charts[type].datasets[0].data = data
        this.charts[type].update()
        return true
      }
      */

      let datasets = []
      datasets[0] = this.chartDataset()
      datasets[0].data = data

      let options = this.chartOptions()
      datasets[0].pointRadius = 0
      datasets[0].lineTension = 0

      options.scales.yAxes[0].gridLines.color = colors.white
      options.scales.yAxes[0].gridLines.display = false
      options.scales.yAxes[0].position = 'right'
      options.scales.yAxes[0].ticks.fontColor = colors.grey
      options.scales.yAxes[0].ticks.fontSize = 14
      options.scales.xAxes[0].gridLines.display = false
      options.scales.xAxes[0].ticks.fontColor = colors.grey
      options.scales.xAxes[0].ticks.fontSize = 14

      options.layout.padding = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 30,
      }

      if (type === 'income') {
        datasets[0].borderColor = colors.lime
        datasets[0].fill = false
      } else {
        datasets[0].borderColor = colors.yellow
        datasets[0].fill = false
      }
      const Chart = window.Chart

      this.charts[type] = new Chart('Chart-' + type, {
        type: 'line',
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: options,
      })

    },
  },
  data () {
    return {
      charts: {
        income: null,
        affordability: null,
      },
      spike: {
        affordability: '0',
        income: '0',
      },
      width: '432',
      height: '340',
    }
  },
  watch: {
    'inViewport.now' (visible) {
      if (visible) {
        this.render()
      }
    }
  },
}
</script>
