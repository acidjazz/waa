<template lang="pug">
  .chartainer.chartainer_dualline
    .top
      .left.area
        .value +{{ affordability }}
        .copy Affordability
        .line
      .right.area
        .value {{ income }}
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

let numeral = require('numeral')

import json from '~/store/US Affordability (Landing).json'
import colors from '~/assets/colors.json'
export default {

  props: ['id', 'width', 'height'],

  data () {
    return {
      affordability: 0,
      income: 0,
    }
  },

  mounted () {

    let data = {
      labels: [],
      datas: [[], []]
    }

    for (let key in json.data) {
      data.labels.push(key)
      data.datas[0].push(json.data[key][0])
      data.datas[1].push(json.data[key][1])
    }

    this.affordability = numeral((data.datas[0][data.datas[0].length - 1] - data.datas[0][0]) / data.datas[0][0]).format('0%')
    this.income = numeral((data.datas[1][data.datas[1].length - 1] - data.datas[1][0]) / data.datas[1][0]).format('0%')

    let Chart = require('chart.js')
    let ctx = 'chart-' + this.id

    let dataset = [{
      label: 'A',
      yAxisID: 'A',
      data: data.datas[0],
      borderColor: colors.orange,
      pointRadius: 0,
      lineTension: 0,
      fill: false
    },
    {
      label: 'B',
      yAxisID: 'B',
      data: data.datas[1],
      borderColor: colors.green,
      pointRadius: 0,
      lineTension: 0,
      fill: false
    }]

    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: dataset
      },
      options: {
        scales: {
          yAxes: [
            {
              id: 'A',
              position: 'left',
              display: false,
              gridLines: { display: false },
              ticks: {
                maxTicksLimit: 5,
              }
            }, {
              id: 'B',
              position: 'right',
              display: false,
              gridLines: { display: false },
              ticks: {
                maxTicksLimit: 5,
              }
            }
          ],
          xAxes: [{
            gridLines: { display: false },
            ticks: {
              maxTicksLimit: 6,
              maxRotation: 0,
            }
          }],
        }
      }
    })
  }
}
</script>
