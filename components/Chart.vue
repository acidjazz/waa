<template lang="pug">
  .chartainer
    canvas(:id="'chart-' + id",width="400px",height="300px")
</template>

<style lang="stylus">
json('../assets/colors.json')
.chartainer
  width 400px
  height 300px
  border-radius 3px
</style>

<script>
import colors from '~/assets/colors.json'
export default {

  props: ['type', 'id', 'data'],

  data () {
    return {
    }
  },
  mounted () {
    let Chart = require('chart.js')
    let ctx = 'chart-' + this.id

    Chart.pluginService.register({
      id: 'background',
      beforeDraw: function (chart, easing, options) {
        var color = options.chart

        if (!color) {
          return
        }

        var helpers = Chart.helpers
        var area = chart.chartArea
        var ctx = chart.ctx

        ctx.save()
        ctx.fillStyle = color
        ctx.fillRect(
          area.left,
          area.top,
          area.right - area.left,
          area.bottom - area.top)
        ctx.restore()
      }
    })

    Chart.defaults.global.defaultFontSize = 16
    Chart.defaults.global.legend.display = false
    Chart.defaults.global.showLines = false
    Chart.defaults.global.elements.rectangle.borderColor = colors.cyan
    Chart.defaults.global.elements.line.borderColor = colors.red
    Chart.defaults.global.hover.animationDuration = 0

    Chart.defaults.global.elements.rectangle.borderColor = colors.cyan

    let myChart = new Chart(ctx, {
      type: this.type,
      width: 400,
      height: 300,
      data: {
        labels: [2000, 2010, 2015, 2020, 2025, 2030],
        datasets: [{
          data: [30, 20, 30, 50, 40, 40],

          pointBackgroundColor: colors.white,
          pointBorderWidth: 4,
          pointRadius: 5,
          pointBorderColor: colors.cyan,

          borderColor: colors.cyan,
          backgroundColor: colors.white,
          fill: 'end'
        }]
      },

      options: {
        plugins: {
          background: {
            chart: colors.lightcyan
          }
        },
        layout: {
          padding: { left: 0, top: 20, rigth: 0, bottom: 20 } },
        scales: {
          yAxes: [{
            display: false,
            gridLines: { color: colors.cyan, display: false },
            ticks: { min: 15, max: 55 }
          }],
          xAxes: [{
            gridLines: { color: colors.cyan },
            ticks: {
              beginAtZero: true,
              fontColor: colors.cyan,
              color: colors.cyan,
            }
          }]
        }
      }
    })
  }
}
</script>
