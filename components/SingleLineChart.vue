<template lang="pug">
.chartainer(:class="{'no-border': data === 'inyourstate' || noborder, 'no-padding': nopadding}")
    //tooltip(v-if="data === 'popgrowth' || data === 'inyourstate'",align="left")
    //tooltip(v-else)
    .title {{ title }}
    .description {{ description }}
    .spike(v-if="(spiked > 0)")
      .value(v-if="cspike !== false")
        span {{ cspike }}
      .value(v-else)
        i-count-up.span(:start="0",:end="spiked",:decimals="0",v-if="!print()")
        span(v-else) {{ Math.round(spiked) }}
        span % 
        span Increase
    .spike(v-else)
      .value
        i-count-up.span(:start="0",:end="spiked",:decimals="0",v-if="!print()")
        span(v-else) {{ Math.round(spiked) }}
        span % 
        span Decrease
    .tagline
    canvas(:id="'chart-' + id",:width="width",:height="height")

</template>

<style lang="stylus" scoped>
json('../assets/colors.json')
json('../assets/fonts.json')
.chartainer
  border 1px solid lightgrey
  border-radius 3px
  padding 20px
  position relative
  &.no-border
    border 0px solid transparent
  &.no-padding
    padding 10px 0px 0px 0px
  > .title
    font h3
    color casal
  > .description
    color grey
    font c1s
  > canvas
    width inherit
    height inherit
  > .spike
    padding 10px 0 0 0
    > .value
      font h1
      color casal
  > .tagline
    color grey
    font c1s
</style>

<script>
import colors from '~/assets/colors.json'
import chartmixin from '~plugins/chart-mixin.js'
import tooltip from '~components/tooltip.vue'
import inViewport from 'vue-in-viewport-mixin'
import ICountUp from 'vue-countup-v2'

export default {
  mixins: [ chartmixin, inViewport ],
  components: { tooltip, ICountUp },
  props: ['id', 'data', 'choice', 'theme', 'width', 'height', 'animation', 'title', 'description', 'tagline', 'noborder', 'nopadding'],
  methods: {

    print () {
      return this.id.indexOf('print') !== -1
    },

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
            data.datas = [result.data.data[this.choice.value][1], result.data.data[this.choice.value][3]]
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
            this.cspike = numeral(result.data.data[this.choice.value][3] - result.data.data[this.choice.value][1]).format('0,0a')
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

      let solid = colors.aqua
      let light = colors.lightaqua

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
          lineTension: 0,
          data: data.datas,
          pointBackgroundColor: colors.white,
          pointBorderWidth: 4,
          pointRadius: 4,
          pointBorderColor: solid,
          borderColor: solid,
          backgroundColor: light,
          fill: true
        }]

        this.myChart.update()

      } else {
        let options = this.chartOptions()
        options.tooltips.backgroundColor = colors.black
        options.tooltips.titleFontSize = 0
        options.tooltips.titleSpacing = 0
        options.tooltips.titleMarginBottom = -6
        options.tooltips.bodyFontColor = colors.white
        options.tooltips.yPadding = 10
        options.tooltips.borderColor = colors.black
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
            top: this.id.indexOf('print') !== -1 ? 0 : 0
          }
        }
        options.scales = {
          yAxes: [{
            display: true,
            position: 'right',
            gridLines: {
              color: colors.white,
              display: false,
              zeroLineColor: solid,
            },
            ticks: {
              fontSize: 11,
              fontColor: colors.grey,
              maxTicksLimit: 6,
              callback: this.ticksCallback
            }
          }],
          xAxes: [{
            display: true,
            gridLines: { color: colors.white, zeroLineColor: solid, display: false },
            ticks: {
              fontSize: 11,
              fontColor: colors.grey,
              color: solid,
              maxTicksLimit: 6,
              maxRotation: 0,
              callback: function (label, index, labels) {
                return `'${label.substr(-2)}`
              },
            }
          }]
        }

        if (this.animation === false) {
          options.animation = false
        }

        let datasets = [{
          data: data.datas,
          pointBackgroundColor: 'transparent',
          pointBorderWidth: 0,
          pointRadius: 8,
          pointHoverRadius: 8,
          pointBorderColor: 'transparent',
          borderColor: solid,
          backgroundColor: light,
          fill: false
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
    if (this.print()) {
      this.populate((data, spike) => {
        this.draw(data, spike)
        this.spiked = Number(this.spike)
      })
    }
  },

  watch: {
    'inViewport.now' (visible) {
      if (visible && !this.print() && this.myChart === undefined) {
        this.populate((data, spike) => {
          this.draw(data, spike)
          this.spiked = Number(this.spike)
        })
      }
    },
    '$route' () {
      this.populate((data, spike) => {
        this.draw(data, spike)
        this.spiked = Number(this.spike)
      })
    }
  },
  data () {
    return {
      myChart: undefined,
      spike: '0.00',
      cspike: false,
      spiked: 0,
    }
  }
}
</script>
