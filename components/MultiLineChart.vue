<template lang="pug">
#HousingGap
  // tooltip(align="right")
  .title Apartments Needed 
  .clear
  .stat
    strong {{ $store.state.homesNeeded }} 
    span Apartment Homes Needed in 
      span(v-if="choice && choice.type === 'national'") the Country
      span(v-else) {{ this.choice.copy }}
      span &nbsp;by 2030
  .legend
    .item
      .dot.dot_blue
      .copy New Apartments Needed
    .item(v-if="choice.type !== 'state'")
      .dot.dot_purple
      .copy Annual Construction Rate (2011-2017)
  .chartainer
    canvas(:id="'chart-' + id",:width="width",:height="height")
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#HousingGap
  border 1px solid lightgrey
  border-radius 6px
  padding 20px
  position relative
  height 460px
  > .title
    font h3
    float left
  > .legend
    > .item
      clear both
      > .dot
        float left
        width 14px
        height 14px
        border-radius 7px
        margin 0 10px 10px 0
        &.dot_blue
          background-color blue
        &.dot_purple
          background-color royalpurple
      > .copy
        float left
        color grey
        line-height 14px
        margin 0 10px 0 0
        font-size 14px
  > .stat
    float right
    line-height 14px
    > span
      color grey
      font-size 14px
    > strong
      font-size 14px
      margin-right 3px
  > .chartainer
    position relative
    > canvas
      width inherit
      height inherit
@media all and (min-width: 1px) and (max-width: 1000px)
  #HousingGap
    height auto
@media print 
  #HousingGap
    .stat
      position absolute
      top 30px
      right 10px
</style>

<script>
import colors from '~/assets/colors.json'
import tooltip from '~components/tooltip.vue'
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ inViewport ],
  components: { tooltip },
  props: ['id', 'data', 'choice', 'width', 'height', 'animation'],

  data () {
    return {
      homesNeeded: 0,
      myChart: undefined
    }
  },

  methods: {

    isNumeric (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    },

    json (sheet, result) {
      window.axios.get('/' + sheet)
        .then(response => {
          result(response)
        })
    },

    populate (callback) {

      const numeral = window.numeral
      let data = {labels: [], datas: [[], []]}
      let jsonc = {}
      let jsonn = {}

      switch (true) {

        case this.choice && this.choice.type === 'national' && this.data === 'aptsneeded':
          this.json('US Building 2.json', (result) => {
            for (let key in result.data.data) {
              if (key !== "" && !isNaN(key)) {
                data.labels.push(key)
                if (this.isNumeric(result.data.data[key][1])) {
                  data.datas[1].push(result.data.data[key][1])
                }
                if (this.isNumeric(result.data.data[key][3])) {
                  data.datas[0].push(result.data.data[key][3])
                }
              }
            }
            this.$store.state.homesNeeded = numeral(data.datas[1][data.datas[1].length - 1]).format('0,0')
            callback(data)
          })
          break
        case this.choice && this.choice.type === 'state' && this.data === 'aptsneeded':
          // this.json('State New Apt HHs Per Year.json', (result) => {
          this.json('State Building Needed.json', (result) => {
            let state = result.data.labels.indexOf(this.choice.value)
            for (let key in result.data.data) {
              if (key !== "" && !isNaN(key)) {
                data.labels.push(key)
                if (this.isNumeric(result.data.data[key][state])) {
                  data.datas[1].push(result.data.data[key][state])
                }
                if (this.isNumeric(result.data.data[key][3])) {
                  data.datas[0].push(result.data.data[key][3])
                }
              }
            }
            callback(data)
            this.$store.state.homesNeeded = numeral(result.data.data[2030][state]).format('0,0')
          })
          /*
          this.json('State New Apt HHs Per Year.json', (result) => {
            let state = result.data.labels.indexOf(this.choice.value)
            this.$store.state.homesNeeded = numeral(result.data.data[""][state]).format('0,0')
          })
          */
          break

        case this.choice && this.choice.type === 'metro' && this.data === 'aptsneeded':
          data = {labels: [], datas: [[], []]}

          this.json('Metro Building Current.json', (resultc) => {
            this.json('Metro Building Needed.json', (resultn) => {
              let metro = resultc.data.labels.indexOf(this.choice.value)
              for (let key in resultc.data.data) {
                if (key !== "") {
                  data.labels.push(key)
                }
                if (this.isNumeric(resultc.data.data[key][metro])) {
                  data.datas[0].push(resultc.data.data[key][metro])
                }
                if (this.isNumeric(resultn.data.data[key][metro])) {
                  data.datas[1].push(resultn.data.data[key][metro])
                }
              }
              this.$store.state.homesNeeded = numeral(data.datas[1][data.datas[1].length - 1]).format('0,0')
              callback(data)
            })
          })
          break

      }

    },

    draw (data, jsonc, jsonn) {

      const numeral = window.numeral
      const Chart = window.Chart

      let ctx = 'chart-' + this.id

      let black = colors.black
      let solid = colors.aqua
      let light = colors.lightaqua

      Chart.defaults.global.defaultFontSize = 16
      Chart.defaults.global.legend.display = false
      Chart.defaults.global.showLines = false
      Chart.defaults.global.elements.rectangle.borderColor = colors.purple
      Chart.defaults.global.elements.line.borderColor = colors.purple
      Chart.defaults.global.hover.animationDuration = 0

      Chart.defaults.global.elements.rectangle.borderColor = colors.purple

      let dataset = []

      if (this.choice.type !== 'state') {
        dataset = [{
          data: data.datas[0],
          lineTension: 0,
          pointBackgroundColor: 'transparent',
          pointHoverBackgroundColor: 'transparent',
          pointBorderWidth: 0,
          pointRadius: 8,
          pointHoverRadius: 8,
          pointBorderColor: 'transparent',
          borderColor: colors.purple,
          fill: false
        }, {
          data: data.datas[1],
          lineTension: 0,
          pointBackgroundColor: 'transparent',
          pointHoverBackgroundColor: 'transparent',
          pointBorderWidth: 0,
          pointRadius: 8,
          pointHoverRadius: 8,
          pointBorderColor: 'transparent',

          borderColor: colors.blue,
          backgroundColor: colors.blue,
          fill: false
        }]
      } else {
        dataset = [{
          data: data.datas[1],
          lineTension: 0,
          pointBackgroundColor: 'transparent',
          pointHoverBackgroundColor: 'transparent',
          pointBorderWidth: 0,
          pointRadius: 8,
          pointHoverRadius: 8,
          pointBorderColor: 'transparent',

          borderColor: colors.blue,
          backgroundColor: colors.blue,
          fill: false
        }]
      }


      if (this.myChart !== undefined) {

        this.myChart.data.datasets = dataset
        this.myChart.update()

      } else {

        let options =  {
          showAllTooltips: false,
          tooltips: {
            displayColors: false,
            backgroundColor: colors.black,
            bodyFontFamily: 'Maven Pro',
            bodyFontSize: 16,
            bodySpacing: 12,
            titleFontSize: 0,
            titleSpacing: 0,
            titleMarginBottom: -6,
            bodyFontColor: colors.white,
            yPadding: 20,
            xPadding: 20,
            borderColor: colors.black,
            borderWidth: 1,
            callbacks: {
              label: function (item, data) {
                if (Number(item.yLabel) < 1 && Number(item.yLabel) > 0) {
                  return numeral(item.yLabel).format('0.00%')
                }
                return [numeral(item.yLabel).format('0,0') + " units"]
                // return ["Potential Excess of \r\n", numeral(item.yLabel).format('0,0') + " units"]
              }
            }
          },
          layout: {
            padding: { left: 0, top: 20, rigth: 0, bottom: 20 } },
          scales: {
            yAxes: [{
              gridLines: {
                color: colors.lightgrey,
                display: false,
                zeroLineColor: colors.lightgrey,
              },
              position: 'left',
              ticks: {
                display: true,
                position: 'right',
                callback: function (label, index, labels) {
                  return numeral(label).format('0a')
                },
                fontSize: 13,
                fontColor: colors.black,
                maxTicksLimit: 5,
              }
            }],
            xAxes: [{
              gridLines: {
                color: colors.lightgrey,
                display: false,
                zeroLineColor: colors.lightgrey,
              },
              ticks: {
                fontSize: 13,
                fontColor: colors.black,
                color: solid,
                maxTicksLimit: 8,
                maxRotation: 0,
                callback: function (label, index, labels) {
                  return `'${label.substr(-2)}`
                },
              }
            }]
          }
        }

        if (this.animation === false) {
          options.animation = false
        }
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
  mounted () {
    if (this.id.indexOf('print') !== -1) {
      this.populate((data) => {
        this.draw(data)
      })
    }
  },
  watch: {
    'inViewport.now' (visible) {
      if (visible && this.id.indexOf('print') === -1) {
        this.populate((data) => {
          this.draw(data)
        })
      }
    },
    '$route' () {
      this.populate((data) => {
        this.draw(data)
      })
    }
  }
}
</script>
