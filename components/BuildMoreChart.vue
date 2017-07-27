<template lang="pug">
#BuildMoreChart
  // tooltip(align="left")
  .chart
    canvas(id="BuildMoreChart-chart")
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#BuildMoreChart
  position relative
  > .tooltip
    top -30px
@import '../assets/stylus/BuildMoreChart-mobile.styl'
</style>

<script>
import colors from '~/assets/colors.json'
// import tooltip from '~components/tooltip.vue'
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ inViewport ],
  // components: { tooltip },

  methods: {

    draw () {

      const Chart = window.Chart
      const numeral = window.numeral
      let ctx = 'BuildMoreChart-chart'
      let data = []
      let datasets = []
      let labels = []
      let yellow = []

      if (this.json === null) {
        this.json = require('../static/US Building 2.json').data
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
        yellow.push(Math.round(j) + 10)
      }

      this.needed = numeral((this.range * 5000000 / 100) + 328500).format('0.0a')

      datasets = [{
        data: data,
        pointBackgroundColor: colors.lightpurple,
        pointHoverBackgroundColor: colors.purple,
        pointBorderWidth: 6,
        pointRadius: 0,
        pointBorderColor: colors.purple,
        borderColor: colors.purple,
        borderWidth: 5,
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
    'inViewport.now' (visible) {
      if (visible) {
        this.draw()
      }
    }
  },
  data () {
    return {
      json: null,
      width: 740,
      height: 360,
      myChart: null,
      range: 70,
      needed: "$328.5k",
    }
  }
}
</script>
