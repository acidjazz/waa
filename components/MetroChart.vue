<template lang="pug">
#MetroChart
  .control
    .copy Sort between the hardest cities to build and affordability measures
    .button.button_percent(:class="{ active: flip === 'costs' }",@click="flip = 'costs'") INCOME
    .button.button_ease(:class="{ active: flip === 'interest'  }",@click="flip = 'interest'") INDEX
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
import housingCosts from '~/static/Metro Burden.json'
import restrictIndex from '~/static/Metro Restriction Index.json'
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

      const Chart = window.Chart
      const numeral = window.numeral
      let ctx = 'MetroChart-chart'
      let datasets = []
      let labels = []
      let costs = []
      let interest = []
      let combined = {}

      let start = 1 + this.offset
      let end = 20 + this.offset
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
        titleFontSize: 16,
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
              max: 0.55,
              min: 0.30,
              maxTicksLimit: 5,
              userCallback: (label, index, labels) => {
                return numeral(label).format('0%')
              },
            },
          }, {
            id: 'b',
            position: 'left',
            ticks: {
              max: 20,
              min: -5.9,
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
            },
            gridLines: {
              display: false,
              tickMarkLength: 30,
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
      flip: 'interest',
      offset: 0,
      myChart: null,
      width: 770,
      height: 380,
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
    width 630px
    margin auto
    > .copy
      color grey
      float left
      padding 6px 0 10px 0
    > .button
      float right
      cursor pointer
      padding 3px 15px
      border 1px solid transparent
      border-radius 3px
      transition background-color 0.2s ease 0s, border 0.2s ease 0.1s, color 0.2s ease 0s
      &:hover:not(.active)
        color blue
        border 1px solid rgba(lightblue, 0.6)
      &.active
        border 1px solid lightblue
        color blue
      &:nth-child(2)
        margin 0 0 0 10px
  > nav
    position absolute
    width 100%
    bottom -10px
    left -15px
    right 0
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
      > i
        transition transform 0.4s ease 0s 
      &.prev
        float left
        &:hover > i
          transform translate(-2px, 0)
      &.next
        float right
        &:hover > i
          transform translate(2px, 0)

@import '../assets/stylus/MetroChart-mobile.styl'
</style>
