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

  props: ['id', 'data', 'type', 'state', 'value', 'theme', 'width', 'height', 'animation'],

  data () {
    return {
      myChart: undefined
    }
  },

  methods: {

    isNumeric (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    },

    populate () {

      let data = {labels: [], datas: [[], []]}
      let jsonc = {}
      let jsonn = {}

      switch (true) {

        case this.type === 'national' && this.data === 'aptsneeded':
        case this.type === 'state' && this.data === 'aptsneeded':
          let json = require('../store/US Building 2.json')
          for (let key in json.data) {
            if (key !== "") {
              data.labels.push(key)
            }
            if (this.isNumeric(json.data[key][1])) {
              data.datas[1].push(json.data[key][1])
            }
            if (this.isNumeric(json.data[key][3])) {
              data.datas[0].push(json.data[key][3])
            }
          }
          this.$store.state.homesNeeded = numeral(data.datas[1][data.datas[1].length - 1]).format('0,0')
          break

        case this.type === 'WAS_STATE_DISABLED_FOR_NOW' && this.data === 'aptsneeded':
          data = {labels: [], datas: [[], []]}
          jsonc = require('../store/State Building Current.json')
          jsonn = require('../store/State Building Needed.json')
          let state = jsonc.labels.indexOf(this.state)
          for (let key in jsonc.data) {
            if (key !== "") {
              data.labels.push(key)
            }
            if (this.isNumeric(jsonc.data[key][state])) {
              data.datas[0].push(jsonc.data[key][state])
            }
            if (this.isNumeric(jsonn.data[key][state])) {
              data.datas[1].push(jsonn.data[key][state])
            }
          }
          this.$store.state.homesNeeded = numeral(data.datas[1][data.datas[1].length - 1]).format('0,0')
          break

        case this.type === 'metro' && this.data === 'aptsneeded':
          data = {labels: [], datas: [[], []]}
          jsonc = require('../store/Metro Building Current.json')
          jsonn = require('../store/Metro Building Needed.json')
          let metro = jsonc.labels.indexOf(this.value)
          for (let key in jsonc.data) {
            if (key !== "") {
              data.labels.push(key)
            }
            if (this.isNumeric(jsonc.data[key][metro])) {
              data.datas[0].push(jsonc.data[key][metro])
            }
            if (this.isNumeric(jsonn.data[key][metro])) {
              data.datas[1].push(jsonn.data[key][metro])
            }
          }
          this.$store.state.homesNeeded = numeral(data.datas[1][data.datas[1].length - 1]).format('0,0')
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

      if (this.myChart !== undefined) {

        this.myChart.data.datasets = dataset
        this.myChart.update()

      } else {

        let options =  {
          showAllTooltips: true,
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
            borderWidth: 1,
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
              position: 'right',
              ticks: {
                display: true,
                position: 'right',
                callback: function (label, index, labels) {
                  return numeral(label).format('0a')
                },
                maxTicksLimit: 5,
              }
            }],
            xAxes: [{
              gridLines: { display: false },
              ticks: {
                fontColor: colors.grey,
                color: solid,
                maxTicksLimit: 10,
                maxRotation: 0,
              }
            }]
          }
        }

        if (this.animation === false) {
          options.animation = false
        }

        Chart.pluginService.register({
          beforeRender: function (chart) {
            if (chart.config.options.showAllTooltips) {
              // create an array of tooltips
              // we can't use the chart tooltip because there is only one tooltip per chart
              chart.pluginTooltips = []
              chart.config.data.datasets.forEach(function (dataset, i) {
                chart.getDatasetMeta(i).data.forEach(function (sector, j) {
                  chart.pluginTooltips.push(new Chart.Tooltip({
                    _chart: chart.chart,
                    _chartInstance: chart,
                    _data: chart.data,
                    _options: chart.options.tooltips,
                    _active: [sector]
                  }, chart))
                })
              })

              // turn off normal tooltips
              chart.options.tooltips.enabled = false
            }
          },
          afterDraw: function (chart, easing) {
            if (chart.config.options.showAllTooltips) {
              // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
              if (!chart.allTooltipsOnce) {
                if (easing !== 1) {
                  return
                }
                chart.allTooltipsOnce = true
              }

              // turn on tooltips
              chart.options.tooltips.enabled = true
              Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
                tooltip.initialize()
                tooltip.update()
                // we don't actually need this since we are not animating tooltips
                tooltip.pivot()
                tooltip.transition(easing).draw()
              })
              chart.options.tooltips.enabled = false
            }
          }
        })

        this.myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: dataset
          },
          options: options
        })

      }
    }
  },
  watch: {
    '$route' () {
      this.populate()
    }
  },
  mounted () {
    this.populate()
  }
}
</script>
