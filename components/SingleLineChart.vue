<template lang="pug">
  .chartainer
    canvas(:id="'chart-' + id",:width="width",:height="height")
    .spike(v-if="(spike > 0)")
      i.fa.fa-long-arrow-up(aria-hidden=true)
      .value {{ spike }}%
    .spike(v-else)
      i.fa.fa-long-arrow-down(aria-hidden=true)
      .value {{ spike }}%
</template>

<style lang="stylus">
json('../assets/colors.json')
.chartainer
  position relative
  > canvas
    width inherit
    height inherit
  > .spike
    position absolute
    top 30px
    right 30px
    > .fa
      float left
      padding 5px 10px 0 0
      &.fa-long-arrow-down
        color red
      &.fa-long-arrow-up
        color green
    > .value
      float left
</style>

<script>
import colors from '~/assets/colors.json'
export default {

  props: ['type', 'id', 'data', 'theme', 'width', 'height'],

  data () {
    return {
      spike: (Math.random() * (20 - -20) + -20).toFixed(2)
    }
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

    /*

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
    */

    Chart.defaults.global.defaultFontSize = 16
    Chart.defaults.global.legend.display = false
    Chart.defaults.global.showLines = false
    Chart.defaults.global.elements.rectangle.borderColor = solid
    Chart.defaults.global.elements.line.borderColor = colors.red
    Chart.defaults.global.hover.animationDuration = 0

    Chart.defaults.global.elements.rectangle.borderColor = solid

    let datas = []
    for (let i = 0; i !== 6; i++) {
      datas.push(Math.floor(Math.random() * 40) + 10)
    }

    let myChart = new Chart(ctx, {
      type: this.type,
      data: {
        labels: [2000, 2010, 2015, 2020, 2025, 2030],

        datasets: [{
          data: datas,

          pointBackgroundColor: colors.white,
          pointBorderWidth: 4,
          pointRadius: 5,
          pointBorderColor: solid,

          borderColor: solid,
          backgroundColor: light,
          fill: true
        }]
      },

      options: {
        plugins: {
          background: {
            chart: light
          }
        },
        layout: {
          padding: { left: 0, top: 20, rigth: 0, bottom: 20 } },
        scales: {
          yAxes: [{
            display: false,
            gridLines: { color: solid, display: false, zeroLineColor: solid },
            ticks: { suggestedMin: 5, suggestedMax: 55 }
          }],
          xAxes: [{
            gridLines: { color: solid, zeroLineColor: solid, display: false },
            ticks: {
              beginAtZero: true,
              fontColor: solid,
              color: solid,
            }
          }]
        }
      }
    })
  }
}
</script>
