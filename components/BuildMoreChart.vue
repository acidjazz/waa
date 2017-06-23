<template lang="pug">
#BuildMoreChart
  .chart
    canvas(id="BuildMoreChart-chart",:width="width",:height="height")
</template>

<script>
import colors from '~/assets/colors.json'
import houseHolds from '~/store/US Apt HHs (Landing).json'
let numeral = require('numeral')
export default {

  methods: {
    draw () {

      let Chart = require('chart.js')
      let ctx = 'BuildMoreChart-chart'
      let data = []
      let datasets = []
      let labels = []

      for (let key in houseHolds.data) {
        if (key >= 2017) {
          labels.push(key)
          data.push(houseHolds.data[key])
        }
      }

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
      }]

      let tooltips = {
        displayColors: false,
        bodyFontFamily: 'Maven Pro',
        bodyFontSize: 16,
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
            position: 'right',
            ticks: {
              callback: function (label, index, labels) {
                return numeral(label).format('0a')
              },
              maxTicksLimit: 5,
              fontSize: 12,
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

  mounted () {
    this.draw()
  },
  data () {
    return {
      width: 770,
      height: 320,
      myChart: null,
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
</style>
