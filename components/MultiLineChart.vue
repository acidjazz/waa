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
let numeral = require('numeral')
export default {

  props: ['id', 'data', 'type', 'value', 'theme', 'width', 'height'],

  data () {
    return { }
  },
  mounted () {

    let data = {
      labels: [2000, 2010, 2015, 2020, 2025, 2030],
      datas: [
        [1, 3, 4, 5, 5.5, 7],
        [1, 2, 3, 4, 5, 6],
      ]
    }

    switch (true) {

      case this.type === 'national' && this.data === 'aptsneeded':
        let json = require('../store/US Building 2.json')
        data = {labels: [], datas: [[], []]}
        for (let key in json.data) {
          data.labels.push(key)
          data.datas[0].push(json.data[key][1])
          data.datas[1].push(json.data[key][3])
        }
        console.log(data)
        break

      case this.type === 'state' && this.data === 'aptsneeded':
        data = {labels: [], datas: [[], []]}
        let jsonc = require('../store/State Building Current.json')
        let jsonn = require('../store/State Building Needed.json')
        let state = jsonc.labels.indexOf(this.value)
        for (let key in jsonc.data) {
          data.labels.push(key)
          data.datas[0].push(jsonc.data[key][state])
          data.datas[1].push(jsonn.data[key][state])
        }
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
    Chart.defaults.global.hover.animationDuration = 0

    Chart.defaults.global.elements.rectangle.borderColor = solid

    let dataset = [{
      data: data.datas[0],
      pointBackgroundColor: colors.white,
      pointBorderWidth: 4,
      pointRadius: 5,
      pointBorderColor: solid,
      borderColor: solid,
      fill: false
    }, {
      data: data.datas[1],
      pointBackgroundColor: colors.white,
      pointBorderWidth: 0,
      pointRadius: 0,
      pointBorderColor: colors.white,

      borderColor: light,
      backgroundColor: light,
      fill: true
    }]

    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: dataset
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
              return numeral(item.yLabel).format('0.00a')
            }
          }
        },
        layout: {
          padding: { left: 0, top: 20, rigth: 0, bottom: 20 } },
        scales: {
          yAxes: [{
            gridLines: { display: false },
            ticks: {
              display: false,
            }
          }],
          xAxes: [{
            gridLines: { display: false },
            ticks: {
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
