<template lang="pug">
#BuildMoreChart
  .controls
    .tip
      .copy(v-if="range <= 25") Lowest level of multifamily completions on record (1993). At this rate <span>{{ needed }}</span> is needed.
      .copy(v-if="range >= 25 && range <= 50") Lowest level of completions since 1993 (2011). At this rate <span>{{ needed }}</span> is needed.
      .copy(v-if="range >= 50 && range <= 75") 2016 Completions. At this rate <span>{{ needed }}</span> is needed.
      .copy(v-if="range >= 75") Peak of multifamily development in 1973, as Baby Boomers becoming adults. At this rate <span>{{ needed }}</span> is needed.
    .control
      input(type="range",v-model="range")
    .copy ^ Adjust how construction rates meet future apartment demand
  .copys
    .value 4.6 Million
    .copy Apartment Hones Needed
  .chart
    canvas(id="BuildMoreChart-chart",:width="width",:height="height")
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')

#BuildMoreChart
  > .copys
    float right
    text-align right
    > .value
      font h1
    > .copy
      color grey

  > .controls
    float left
    width 540px
    > .tip
      overflow hidden
      border 1px solid lightblue
      background-color lightgrey
      color grey
      padding 5px 10px
      border-radius 3px
      margin 0 0 10px 0
      height 52px
      > .copy
        animation inFromLeft 0.1s ease 0s both
        > span
          animation fadeIn 0.1s ease 0s both
    > .copy
      color grey
      width 500px
      font c1s
      padding 10px 0 0 0
    > .control
      width 400px
      > input[type=range]
        -webkit-appearance none
        width 100%
        background transparent
      > input[type=range]:focus
        outline: none
      > input[type=range]::-ms-track
        width 100%
        cursor pointer
        background transparent
        border-color transparent
        color transparent
      > input[type=range]::-webkit-slider-thumb
        -webkit-appearance none
        border 5px solid white
        width 20px
        height 20px
        border-radius 50%
        background-color transparent
        margin-top -5px
        box-shadow 0 2px 3px rgba(17, 17, 17, 0.2)
        transition all 0.4s ease 0s
        &:hover
          box-shadow 0 2px 3px rgba(17, 17, 17, 0.8)
        
        
      > input[type=range]::-webkit-slider-runnable-track
        cursor pointer
        background rgba(blue, 0.9)
        transition background 0.2s ease 0s
        height 10px
        border-radius 5px
      > input[type=range]:focus::-webkit-slider-runnable-track
        background rgba(blue, 1)

      

</style>

<script>
import colors from '~/assets/colors.json'
let numeral = require('numeral')
export default {

  methods: {

    draw () {

      let Chart = require('chart.js')
      let ctx = 'BuildMoreChart-chart'
      let data = []
      let datasets = []
      let labels = []
      let yellow = []

      if (this.json === null) {
        this.json = require('../store/US Building 2.json').data
      }

      for (let key in this.json) {
        if (key >= 2017) {
          labels.push(key)
          data.push(this.json[key][1])
        }
      }

      let j = 1
      for (let i = 0; i !== 14; i++) {
        j += (i * this.range) / 100
        yellow.push(Math.round(j))
      }

      this.needed = numeral((this.range * 5000000 / 100) + 328500).format('$0.0a')

      datasets = [{
        data: data,
        pointBackgroundColor: colors.lightpurple,
        pointHoverBackgroundColor: colors.purple,
        pointBorderWidth: 10,
        pointRadius: 3,
        pointBorderColor: colors.purple,
        borderColor: colors.purple,
        borderWidth: 10,
        fill: false,
        yAxisID: 'a',
      }, {
        data: yellow,
        pointBackgorundColor: colors.yellow,
        pointBorderWidth: 0,
        pointRadius: 1,
        pointBorderColor: colors.yellow,
        borderColor: colors.yellow,
        borderWidth: 5,
        fill: false,
        yAxisID: 'b',
      }]

      let tooltips = {
        displayColors: false,
        bodyFontFamily: 'Maven Pro',
        bodyFontSize: 16,
        titleFontSize: 16,
        backgroundColor: colors.lightpurple,
        titleFontColor: colors.purple,
        bodyFontColor: colors.purple,
        borderColor: colors.purple,
        borderWidth: 1,
        titleMarginBottom: 6,
        yPadding: 10,
        xPadding: 10,
        callbacks: {
          label: (item, data) => {
            return numeral(item.yLabel).format('0.0a')
          }
        }
      }

      let options = {
        tooltips: tooltips,
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 5,
              fontSize: 12
            }
          }],
          yAxes: [{
            id: 'a',
            position: 'right',
            ticks: {
              callback: function (label, index, labels) {
                return numeral(label).format('0a')
              },
              maxTicksLimit: 5,
              fontSize: 12,
            }
          }, {
            id: 'b',
            display: false,
            startAtZero: true,
            ticks: {
              beginAtZero: true,
              min: -2,
              max: 100,
            }
          }]
        }
      }

      Chart.defaults.global.legend.display = false

      if (this.myChart !== null) {
        this.myChart.data.datasets = datasets
        this.myChart.data.labels = labels
        this.myChart.options.animation = false
        this.myChart.update()
      }  else {
        this.myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: datasets,
          },
          options: options
        })
      }
    },
  },

  watch: {
    'range' () {
      this.draw()
    }
  },

  mounted () {
    this.draw()
  },
  data () {
    return {
      json: null,
      width: 770,
      height: 320,
      myChart: null,
      range: 0,
      needed: "$328.5k",
    }
  }
}
</script>
