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

let numeral = require('numeral')

export default {

  props: ['id', 'data', 'type', 'value', 'theme', 'width', 'height'],

  data () {
    return {
      spike: 0
      // spike: (Math.random() * (20 - -20) + -20).toFixed(2)
    }
  },

  methods: {
    toCurrent (data, index = undefined) {
      let current = new Date().getFullYear()
      let labels = []
      let datas = []
      let i = 0

      for (let key in data) {
        if (key >= current) {
          if (key === current || key === '2030' || (++i % 4)) {
            labels.push(key)
            if (index !== undefined) {
              datas.push(data[key][index])
            } else {
              datas.push(data[key])
            }
          }
        }
      }

      return {labels: labels, datas: datas}
    },

  },

  mounted () {

    let data = {
      labels: [2000, 2010, 2015, 2020, 2025, 2030],
      datas: []
    }

    let json = {}

    for (let i = 0; i !== 6; i++) {
      data.datas.push(Math.floor(Math.random() * 40) + 10)
    }

    switch (true) {

      case this.type === 'national' && this.data === 'apthhgrowth':
        data = this.toCurrent(require('../store/US Apt HHs (Landing).json').data)
        break

      case this.type === 'state' && this.data === 'apthhgrowth':
        json = require('../store/State New Apt HHs Per Year.json')
        data = this.toCurrent(json.data, json.labels.indexOf(this.value))
        break

      case this.type === 'state' && this.data === 'rentgrowth':
        json = require('../store/State Rentership Rate.json')
        data.labels = [2017, 2030]
        data.datas = json.data[this.value]
        break

      case this.type === 'state' && this.data === 'popgrowth':
        json = require('../store/State HH Growth.json')
        data.labels = [2017, 2030]
        data.datas = [ 0, json.data[this.value] ]
        this.spike = numeral(json.data[this.value]).format('0.00%').replace(/%/, '')

        break

      case this.type === 'national' && this.data === 'rentgrowth':
        data = this.toCurrent(require('../store/US Rentership Rate (Landing).json').data)
        break

      case this.type === 'national' && this.data === 'popgrowth':
        data = this.toCurrent(require('../store/US Population (Landing).json').data)
        break

      default:
        break

    }

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
    Chart.defaults.global.hover.animationDuration = 200

    Chart.defaults.global.elements.rectangle.borderColor = solid
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          data: data.datas,

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
        tooltips: {
          displayColors: false,
          backgroundColor: colors.white,
          bodyFontFamily: 'Maven Pro',
          bodyFontSize: 20,
          titleFontSize: 0,
          titleSpacing: 0,
          titleMarginBottom: -6,
          bodyFontColor: solid,
          yPadding: 10,
          borderColor: colors.lightblue,
          borderWidth: 4,
          callbacks: {
            label: function (item, data) {
              if (Number(item.yLabel) < 1 && Number(item.yLabel) > 0) {
                return numeral(item.yLabel).format('0.00%')
              }
              return numeral(item.yLabel).format('0.0a')
            }
          }
        },
        layout: {
          padding: {
            top: 100
          }
        },
        scales: {
          yAxes: [{
            display: false,
            gridLines: { color: solid, display: false, zeroLineColor: solid },
          }],
          xAxes: [{
            gridLines: { color: solid, zeroLineColor: solid, display: false },
            ticks: {
              fontColor: solid,
              color: solid,
              maxRotation: 0,
            }
          }]
        }
      }
    })
  }
}
</script>
