<template lang="pug">
#MetroChart
  .control
    .copy Flip between the easiest and hardest cities to add new apartments >
    .button.button_percent(:class="{ active: flip === 'costs' }",@click="flip = 'costs'") % OF
    .button.button_ease(:class="{ active: flip === 'interest'  }",@click="flip = 'interest'") EASE
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

  watch: {
    'flip' () {
      this.offset = 0
      this.draw()
    }
  },
  methods: {

    alterOffset (dir) {

      if (dir < 1) {
        if (this.offset > 0) {
          this.offset = this.offset - 1
        } else {
          this.offset = 41
        }
      } else {
        if (this.offset < 41) {
          this.offset = this.offset + 1
        } else {
          this.offset = 0
        }
      }
      this.draw()
    },

    sort (object, skey) {

      let sorted = {}
      let sortable = []
      for (let key in object) {
        sortable.push([key, object[key][skey]])
      }
      sortable.sort((a, b) => {
        return a[1] - b[1]
      })
      sortable.reverse()
      for (let key in sortable) {
        sorted[sortable[key][0]] = object[sortable[key][0]]
      }

      return sorted

    },

    draw () {

      let Chart = require('chart.js')
      let ctx = 'MetroChart-chart'
      let datasets = []
      let labels = []
      let costs = []
      let interest = []
      let combined = {}

      let start = 1 + this.offset
      let end = 10 + this.offset
      let i = 0

      for (let key in housingCosts.data) {
        combined[key] = {
          costs: housingCosts.data[key],
          interest: restrictIndex.data[key],
        }
      }

      combined = this.sort(combined, this.flip)

      // pull out our paginated version
      for (let key in combined) {
        if (++i >= start && i <= end) {
          labels.push(key)
          costs.push(combined[key].costs)
          interest.push(combined[key].interest)
        }
      }

      datasets = [{
        type: 'bubble',
        data: interest,
        backgroundColor: colors.tomato,
        borderColor: colors.tomato,
        borderWidth: 10,
        yAxisID: 'b',
      }, {
        data: costs,
        backgroundColor: colors.lightgrey,
        hoverBackgroundColor: colors.lightblue,
        yAxisID: 'a',
      }]

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
            if (item.datasetIndex === 1) {
              return numeral(item.yLabel).format('0.00%')
            }
            return numeral(item.yLabel).format('0.00a')
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
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
            }
          }],
          xAxes: [{
            id: 'xa',
            ticks: {
              // display: false,
              maxRotation: 0,
              padding: 20,
            },
            gridLines: {
              display: false,
              // tickMarkLength: 20,
            }
          }]
        },
        tooltips: tooltips
      }

      Chart.defaults.global.legend.display = false

      if (this.myChart !== null) {
        this.myChart.data.datasets = datasets
        this.myChart.data.labels = labels
        this.myChart.update()
      }  else {
        this.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: datasets,
          },
          options: options
        })
      }
    }
  },
  mounted () {
    this.draw()
  },
  data () {
    return {
      flip: 'costs',
      offset: 0,
      myChart: null,
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
    z-index 10
    > div
      text-align center
      padding 5px 10px
      color blue
      cursor pointer
      border-radius 3px
      border 1px solid lightblue
      background-color white
      transition background-color 0.2s ease 0s
      &:hover
        background-color lightgrey
      &.prev
        float left
      &.next
        float right
</style>
