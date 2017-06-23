<template lang="pug">
#MetroChart
  .control
    .copy Flip between the easiest and hardest cities to add new apartments >
    .button.button_percent(:class="{ active: flip === 'percent' }",@click="flip = 'percent'") % OF
    .button.button_ease(:class="{ active: flip === 'ease'  }",@click="flip = 'ease'") EASE
    .clear
  .chart
    canvas(id="MetroChart-chart",:width="width",:height="height")
  nav
    .prev(@click="alterOffset(-1)")
      i.fa.fa-chevron-left
    .next(@click="alterOffset(1)")
      i.fa.fa-chevron-right
</template>

<script>
import colors from '~/assets/colors.json'
import housingCosts from '~/store/Metro Housing Costs.json'
import restrictIndex from '~/store/Metro Restriction Index.json'
let numeral = require('numeral')
export default {

  methods: {

    alterOffset (dir) {

      if (dir < 1) {
        if (this.offset > 0) {
          this.offset = this.offset - 1
        } else {
          this.offset = 39
        }
      } else {
        if (this.offset < 40) {
          this.offset = this.offset + 1
        } else {
          this.offset = 0
        }
      }
      this.draw()
    },

    draw () {

      let Chart = require('chart.js')
      let ctx = 'MetroChart-chart'
      this.data = []
      this.datai = []
      this.datasets = []
      this.labels = []

      let start = 1 + this.offset
      let end = 10 + this.offset
      let i = 0

      for (let cost in housingCosts.data) {
        if (++i >= start && i <= end) {
          this.labels.push(cost)
          this.data.push(housingCosts.data[cost])
        }
      }

      i = 0

      for (let index in restrictIndex.data) {
        if (++i >= start && i <= end) {
          this.datai.push(restrictIndex.data[index])
        }
      }

      console.log(this.datai)

      this.datasets = [{
        data: this.data,
        backgroundColor: colors.lightgrey,
        hoverBackgroundColor: colors.lightblue,
        yAxisId: 'a',
        xAxisId: 'xa',
      }]
      /*
      , {
        type: 'bubble',
        data: this.datai,
        backgroundColor: colors.tomato,
        yAxisId: 'b',
        xAxisId: 'xb',
      }]
      */

      let tooltips = {
        displayColors: false,
        bodyFontFamily: 'Maven Pro',
        bodyFontSize: 16,
        backgroundColor: colors.lightgrey,
        titleFontColor: colors.black,
        bodyFontColor: colors.black,
        borderColor: colors.lightgrey,
        borderWidth: 1,
        titleMarginBottom: 6,
        yPadding: 10,
        xPadding: 10,
        callbacks: {
          label: (item, data) => {
            return numeral(item.yLabel).format('0%')
          }
        }
      }

      let options = {
        scales: {
          yAxes: [{
            id: 'a',
            position: 'right',
            ticks: {
              beginAtZero: true,
              max: 1.0,
              maxTicksLimit: 5,
              userCallback: (label, index, labels) => {
                return numeral(label).format('0%')
              },
            },
          }, {
            id: 'b',
            position: 'left',
            gridlines: {
              display: false
            },
            ticks: {
              // display: false
              max: 2500,
              beginAtZero: true,
              min: 0,
            }
          }
          ],
          xAxes: [{
            id: 'xa',
            ticks: {
              // display: false
              maxRotation: 0,
              padding: {bottom: 100},
            },
            gridLines: {
              display: false,
              tickMarkLength: 20,
            }
          }, {
            id: 'xb',
            ticks: {
              display: false
            },
            gridLines: {
              display: false
            }
          }
          ]
        },
        tooltips: tooltips
      }

      Chart.defaults.global.legend.display = false

      if (this.myChart === undefined) {
        this.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.labels,
            datasets: this.datasets,
          },
          options: options
        })
      } else {
        this.myChart.data.datasets = this.datasets
        this.myChart.data.labels = this.labels
        this.myChart.update()
      }

    }
  },
  mounted () {
    this.draw()
  },
  data () {
    return {
      labels: [],
      data: [],
      datai: [],
      datasets: [],
      flip: 'ease',
      offset: 0,
      myChart: undefined,
      width: 770,
      height: 320,
    }
  }
}

</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')

#MetroChart
  position relative
  width 100%
  height 100%
  > .control
    width 620px
    margin auto
    > .copy
      color grey
      float left
      padding 6px 0 0 0
    > .button
      float right
      cursor pointer
      padding 3px 15px
      border 1px solid transparent
      border-radius 3px
      transition background-color 0.2s ease 0s
      &:hover:not(.active)
        background-color lightgrey
      &.active
        border 1px solid lightgrey
        color blue
      &:nth-child(2)
        margin 0 0 0 10px
  > nav
    position absolute
    width 100%
    bottom -15px
    left -5px
    > div
      text-align center
      padding 5px 10px
      color blue
      cursor pointer
      border-radius 3px
      border 1px solid lightblue
      transition background-color 0.2s ease 0s
      &:hover
        background-color lightgrey
      &.prev
        float left
      &.next
        float right
</style>
