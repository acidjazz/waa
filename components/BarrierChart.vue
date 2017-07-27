<template lang="pug">
#BarrierChart
  // tooltip(align="left")
  .chart
    canvas(id="BarrierChart-chart",:width="width",:height="height")
</template>
<style lang="stylus">
#BarrierChart
  position relative
  > .tooltip
    top -30px
</style>
<script>
import colors from '~/assets/colors.json'
// import tooltip from '~components/tooltip.vue'
import inViewport from 'vue-in-viewport-mixin'
import housingCosts from '~/static/Metro Burden.json'
import restrictIndex from '~/static/Metro Restriction Index.json'
export default {
  mixins: [ inViewport ],
  // components: { tooltip },
  methods: {
    sort (object, skey) {

      let sorted = {}
      let sortable = []
      for (let key in object) {
        sortable.push([key, object[key][skey]])
      }
      sortable.sort((a, b) => {
        return a[1] - b[1]
      })
      for (let key in sortable) {
        sorted[sortable[key][0]] = object[sortable[key][0]]
      }
      return sorted
    },

    line (start, end, steps) {

      let data = []
      let distance = end - start
      let gap = distance / steps
      for (let i = 1; i <= steps; i++)  {
        data.push(start + (gap * i))
      }

      return data

    },
    draw () {
      const numeral = window.numeral
      const Chart = window.Chart
      let ctx = 'BarrierChart-chart'
      let datasets = []
      let labels = []
      let costs = []
      let interest = []
      let combined = {}
      let names = {}

      for (let key in housingCosts.data) {
        combined[key] = {
          costs: housingCosts.data[key],
          interest: restrictIndex.data[key],
        }

        names[restrictIndex.data[key]] = key
      }

      combined = this.sort(combined, 'costs')

      for (let key in combined) {
        labels.push(numeral(combined[key].costs).format('0%'))
        costs.push(combined[key].costs)
        interest.push(combined[key].interest)
      }

      costs = this.line(costs[0], costs[costs.length - 1], costs.length)

      datasets = [{
        type: 'bubble',
        data: interest,
        backgroundColor: colors.tomato,
        borderColor: colors.tomato,
        borderWidth: 6,
        yAxisID: 'b',
      }, {
        data: costs,
        borderColor: colors.blue,
        backgroundColor: colors.blue,
        hoverBackgroundColor: colors.lightblue,
        yAxisID: 'a',
        fill: false,
      }]

      let tooltips = {
        displayColors: false,
        bodyFontFamily: 'Maven Pro',
        bodyFontSize: 16,
        titleFontSize: 0,
        titleMarginBottom: -6,
        backgroundColor: colors.lightgrey,
        titleFontColor: colors.darkblue,
        bodyFontColor: colors.darkblue,
        borderColor: colors.darkblue,
        borderWidth: 1,
        yPadding: 10,
        xPadding: 10,
        callbacks: {
          label: (item, data) => {
            if (item.datasetIndex === 1) {
              return numeral(item.yLabel).format('0.00%')
            }
            return names[item.yLabel]
          }
        }
      }

      let options = {
        scales: {
          yAxes: [{
            id: 'a',
            display: false,
            position: 'right',
            ticks: {
              max: 0.59,
              min: 0.25,
              maxTicksLimit: 5,
              userCallback: (label, index, labels) => {
                return numeral(label).format('0%')
              },
            },
          }, {
            id: 'b',
            position: 'right',
            ticks: {
              max: 25,
              min: -10.0,
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
              maxTicksLimit: 7,
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
          type: 'line',
          data: {
            labels: labels,
            datasets: datasets,
          },
          options: options
        })
      }
    }
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
      offset: 0,
      myChart: null,
      width: 740,
      height: 460,
    }
  }
}
</script>
