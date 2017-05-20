
<template lang="pug">
  .chartainer
    | {{ sheet }}, {{ type }}
    canvas(:id="'chart-' + id")
</template>

<style lang="stylus">
.chartainer
  width 800px
  height 400px
  margin 0 auto 50px auto
</style>

<script>

import charts from '~/store/charts.json'

let colors = [
  '#ffd012',
  '#a6e50f',
  '#ff6d4a',
  '#624096',
  '#4da1ff'
]

let graph = charts[0]

export default {

  props: ['type'],
  data () {
    return {
      sheet: graph.sheet,
      id: this._uid
    }
  },
  mounted () {
    let chartType = this.$props.type

    let datasets = []

    for (let key in graph.data) {
      datasets.push({
        label: key,
        data: graph.data[key],
        hidden: key !== '2007',
        backgroundColor: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    let Chart = require('chart.js')
    Chart.defaults.global.defaultFontSize = 16

    let ctx = 'chart-' + this._uid
    let myChart = new Chart(ctx, {
      type: chartType,
      width: 400,
      height: 400,
      data: {
        labels: graph.labels,
        datasets: datasets
      },
      options: { scales: {
        yAxes: [{ stacked: true, ticks: { beginAtZero: false } }],
        xAxes: [{
          ticks: {
            callback: (value) => { return value.substr(0, 10) + '..' }
          }
        }]
      }}
    })
  }
}
</script>
