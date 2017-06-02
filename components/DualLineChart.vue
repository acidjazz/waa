<template lang="pug">
  .chartainer.chartainer_dualline
    .top
      .left.area
        .value +13%
        .copy Affordability
        .line
      .right.area
        .value +21%
        .copy Income
        .line
    .clear
    .chart
      canvas(:id="'chart-' + id",:width="width",:height="height")
</template>
<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
.chartainer.chartainer_dualline
  border 1px solid lightgrey
  > .top
    text-align center
    > .left
      width 50%
      border-right 1px solid lightgrey
      float left
      > .line
        background-color orange
    > .right
      width calc(50% - 1px)
      float right
      > .line
        background-color green
    > .area
      padding 30px 0 10px 0
      > .value
        font h1
      > .copy
        color grey
        padding 5px 0 10px 0
      > .line
        height 5px
        width 100px
        margin auto
  > .chart
    border-top 1px solid lightgrey
    padding 0 0 30px 0
</style>

<script>
import colors from '~/assets/colors.json'
export default {

  props: ['id', 'width', 'height'],

  data () {
    return {}
  },

  mounted () {
    let Chart = require('chart.js')
    let ctx = 'chart-' + this.id

    let datas = []
    let odatas = []
    for (let i = 0; i !== 6; i++) {
      datas.push(Math.floor(Math.random() * 100000) + 10000)
      odatas.push(Math.floor(Math.random() * 100000) + 10000)
    }

    let dataset = [{
      data: datas,
      borderColor: colors.orange,
      pointRadius: 0,
      lineTension: 0,
      fill: false
    },
    {
      data: odatas,
      borderColor: colors.green,
      pointRadius: 0,
      lineTension: 0,
      fill: false
    }]

    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [2005, 2010, 2015, 2020, 2025, 2030],
        datasets: dataset
      },
      options: {
        scales: {
          yAxes: [{
            display: false,
            gridLines: { display: false },
          }],
          xAxes: [{
            gridLines: { display: false },
          }],
        }
      }
    })
  }
}
</script>
