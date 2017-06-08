<template lang="pug">
  .chartainer
    canvas(:id="'chart-' + id",:width="width",:height="height")
</template>

<style lang="stylus">
json('../assets/colors.json')
.chartainer
  position relative
  > canvas
    width inherit
    height inherit
</style>

<script>
import colors from '~/assets/colors.json'
export default {

  props: ['id', 'data', 'type', 'theme', 'width', 'height'],

  data () {
    return { }
  },
  mounted () {
    let Chart = require('chart.js')
    let ctx = 'chart-' + this.id

    let solid = colors.cyan
    let light = colors.lightcyan

    if (this.theme === 'lime') {
      solid = colors.lime
      light = colors.lightlime
    }

    if (this.theme === 'orange') {
      solid = colors.orange
      light = colors.lightorange
    }

    if (this.theme === 'red') {
      solid = colors.red
      light = colors.lightred
    }

    Chart.defaults.global.defaultFontSize = 16
    Chart.defaults.global.legend.display = false
    Chart.defaults.global.showLines = false
    Chart.defaults.global.elements.rectangle.borderColor = solid
    Chart.defaults.global.elements.line.borderColor = colors.red
    Chart.defaults.global.hover.animationDuration = 0

    Chart.defaults.global.elements.rectangle.borderColor = solid

    let datas = []
    let odatas = []
    for (let i = 0; i !== 6; i++) {
      let value = Math.floor(Math.random() * 40) + 10
      datas.push(value)
      odatas.push(value + 10)
    }

    let dataset = [{
      data: datas,
      pointBackgroundColor: colors.white,
      pointBorderWidth: 0,
      pointRadius: 0,
      pointBorderColor: solid,

      borderColor: light,
      backgroundColor: light,
      fill: true
    }, {
      data: odatas,
      pointBackgroundColor: colors.white,
      pointBorderWidth: 4,
      pointRadius: 5,
      pointBorderColor: solid,
      borderColor: solid,
      fill: false
    }]

    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [2000, 2010, 2015, 2020, 2025, 2030],

        datasets: dataset
      },

      options: {
        layout: {
          padding: { left: 0, top: 20, rigth: 0, bottom: 20 } },
        scales: {
          yAxes: [{
            position: 'right',
            gridLines: { color: colors.lightgrey },
            ticks: {
              fontColor: colors.grey,
              maxTicksLimit: 4
            }
          }],
          xAxes: [{
            gridLines: { display: false },
            ticks: {
              beginAtZero: true,
              fontColor: colors.grey,
              color: solid,
            }
          }]
        }
      }
    })
  }
}
</script>
