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
    right 50px
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
import chartmixin from '~plugins/chart-mixin.js'

export default {
  mixins: [ chartmixin ],
  props: ['id', 'data', 'choice', 'theme', 'width', 'height', 'animation'],
  methods: {

    clean () {
      let selection = this.$el.querySelectorAll('.chartainer > iframe')
      for (let i = 0; i !== selection.length; i++) {
        selection[i].remove()
      }
    },

    json (sheet, result) {
      window.axios.get('/' + sheet)
        .then(response => {
          result(response)
        })
    },

    populate (complete) {

      // this.clean()

      let data = {labels: [], datas: []}
      let json = {}
      let spike = false
      const numeral = window.numeral

      switch (true) {

        case this.choice.type === 'national' && this.data === 'apthhgrowth':
          this.json('US Apt HHs (Landing).json', (result) => {
            data = this.toCurrent(result.data.data)
            complete(data, spike)
          })
          break

        case this.choice.type === 'national' && this.data === 'rentgrowth':
          this.json('US Rentership Rate (Landing).json', (result) => {
            data = this.toCurrent(result.data.data)
            complete(data, spike)
          })
          break

        case this.choice.type === 'national' && this.data === 'popgrowth':
          this.json('US Population (Landing).json', (result) => {
            data = this.toCurrent(result.data.data)
            complete(data, spike)
          })
          break

        case this.choice.type === 'state' && this.data === 'apthhgrowth':
          this.json('State New Apt HHs Per Year.json', (result) => {
            data = this.toCurrent(result.data.data, result.data.labels.indexOf(this.choice.value))
            complete(data, spike)
          })
          break

        case this.choice.type === 'state' && this.data === 'rentgrowth':
          this.json('State Renter Households.json', (result) => {
            data.labels = [2016, 2030]
            data.datas = [result.data.data[this.choice.value][1], result.data.data[this.choice.value][3]]
            complete(data, spike)
          })
          break

        case this.choice.type === 'state' && this.data === 'popgrowth':
          this.json('State HH Growth.json', (result) => {
            data.labels = [2016, 2030]
            data.datas = [result.data.data[this.choice.value][2], result.data.data[this.choice.value][3]]
            spike = numeral(result.data.data[this.choice.value][4]).format('0.00%').replace(/%/, '')
            complete(data, spike)
          })
          break

        case this.choice.type === 'metro' && this.data === 'apthhgrowth':
          this.json('Metro New Apt HHs Per Year.json', (result) => {
            data = this.toCurrent(result.data.data, result.data.labels.indexOf(this.choice.value))
            complete(data, spike)
          })
          break

        case this.choice.type === 'metro' && this.data === 'rentgrowth':
          this.json('Metro Renter HHs.json', (result) => {
            data = {
              labels: [2016, 2030],
              datas: [result.data.data[this.choice.value][1], result.data.data[this.choice.value][3]]
            }
            complete(data, spike)
          })
          break

        case this.choice.type === 'metro' && this.data === 'popgrowth':
          this.json('Metro Pop Growth.json', (result) => {
            data = this.toCurrent(result.data.data, result.data.labels.indexOf(this.choice.value))
            complete(data, spike)
          })
          break

        case this.data === 'inyourstate':
          this.json('State New Apt HHs Per Year.json', (result) => {
            data = this.toCurrent(result.data.data, result.data.labels.indexOf(this.choice.state))
            complete(data, spike)
          })
          break

        default:
          break

      }

    },

    draw (data, spike) {

      const numeral = window.numeral

      if (spike === false) {
        let a = data.datas[data.datas.length - 1]
        let b = data.datas[0]
        spike = numeral((a - b) / b).format('0.00%').replace(/%/, '')
        // console.log(this.data, a, b, (a - b) / b, numeral((a - b) / b).format('0.00%'), spike)
      }

      this.spike = isNaN(spike) ? 100 : spike

      const Chart = window.Chart
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

      if (this.myChart !== undefined) {

        this.myChart.data.datasets = [{
          data: data.datas,
          pointBackgroundColor: colors.white,
          pointBorderWidth: 4,
          pointRadius: 5,
          pointBorderColor: solid,
          borderColor: solid,
          backgroundColor: light,
          fill: true
        }]

        this.myChart.update()

      } else {
        let options = this.chartOptions()
        options.tooltips.backgroundColor = light
        options.tooltips.titleFontSize = 0
        options.tooltips.titleSpacing = 0
        options.tooltips.titleMarginBottom = -6
        options.tooltips.bodyFontColor = solid
        options.tooltips.yPadding = 10
        options.tooltips.borderColor = solid
        options.tooltips.callbacks = {
          label: function (item, data) {
            if (Number(item.yLabel) < 1 && Number(item.yLabel) > 0) {
              return numeral(item.yLabel).format('0.00%')
            }
            return numeral(item.yLabel).format('0.00a')
          }
        }
        options.layout = {
          padding: {
            top: this.id.indexOf('print') !== -1 ? 50 : 70
          }
        }
        options.scales = {
          yAxes: [{
            position: 'right',
            gridLines: {
              color: solid,
              display: false,
              zeroLineColor: solid,
            },
            ticks: {
              fontSize: 12,
              fontColor: colors.grey,
              maxTicksLimit: 6,
              callback: function (label, index, labels) {
                if (label.toString().indexOf('.') !== -1) {
                  return numeral(label).format('0%')
                }
                return numeral(label).format('0a')
              }
            }
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

        if (this.animation === false) {
          options.animation = false
        }

        let datasets = [{
          data: data.datas,
          pointBackgroundColor: colors.white,
          pointBorderWidth: this.id.indexOf('print') !== -1 ? 2 : 4,
          pointRadius: this.id.indexOf('print') !== -1 ? 2 : 5,
          pointBorderColor: solid,
          borderColor: solid,
          backgroundColor: light,
          fill: true
        }]

        this.myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets:  datasets
          },
          options: options
        })

      }

    },

    toCurrent (data, index = undefined) {
      // let current = new Date().getFullYear()
      let current = 2016
      let labels = []
      let datas = []
      let i = 0

      for (let key in data) {
        if (key >= current) {
          // if (key === current || key === '2030' || !(++i % 3)) {
          labels.push(key)
          if (index !== undefined) {
            datas.push(data[key][index])
          } else {
            datas.push(data[key])
          }
          // }
        }
      }

      return {labels: labels, datas: datas}
    },

  },

  mounted () {
    this.populate((data, spike) => {
      this.draw(data, spike)
    })
  },
  watch: {
    '$route' () {
      this.populate((data, spike) => {
        this.draw(data, spike)
      })
    }
  },
  data () {
    return {
      myChart: undefined,
      spike: 0,
    }
  }
}
</script>
