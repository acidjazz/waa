
<template lang="pug">
doctype
#MetroDemand
  .inner
    .title(v-in-viewport) Metro Demand
    .copy(v-in-viewport) Based on specific factors like local regulations and avaiable land to develop, the Barriers to Apartment Construction Index ranks 50 metro areas on how hard it is to add new apartments.  See how your city stacks up.
    hr
    .legend
      .copy(v-in-viewport) rate of building
      .dot(v-in-viewport)
    .chart
      canvas(id="chartMetroDemand",width="900",height="300")
</template>

<style lang="stylus">

json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
@import '../assets/stylus/metrodemand.styl'
@import '../assets/stylus/metrodemand-mobile.styl'

</style>

<script>
import colors from '~/assets/colors.json'
import inViewport from 'vue-in-viewport-mixin'
import inViewportDirective from 'vue-in-viewport-directive'

export default {

  directives: { 'in-viewport': inViewportDirective },

  mixins: [ inViewport ],

  methods: {

    json (sheet, result) {
      window.axios.get('/' + sheet)
        .then(response => {
          result(response)
        })
    },

    populate (result) {

      this.json('Metro Building Current.json', (current) => {
        this.json('Metro Building Needed.json', (needed) => {
          result(current.data, needed.data)
        })
      })

    },

    draw () {

      let labels = ['New York City', 'Dallas Fort Worth', 'Miami', 'Atlanta', 'Los Angeles', 'Phoenix', 'Orlando', 'Washington D.C.', 'Austin']
      let shorts = ['NYC', 'Dallas', 'Miami', 'Atlanta', 'LA', 'Phoenix', 'Orlando', 'D.C.', 'Austin']
      let current = []
      let needed = []

      for (let label of labels) {
        let index = this.current.labels.indexOf(label)
        current.push(this.current.data[2017][index])
        needed.push(this.needed.data[2017][index])
      }

      const numeral = window.numeral
      const Chart = window.Chart

      let ctx = 'chartMetroDemand'

      let datasets = [{
        data: current,
        backgroundColor: colors.aqua,
      }, {
        data: needed,
        backgroundColor: colors.lightgrey,
      }]

      if (this.myChart !== undefined) {
        this.myChart.data.datasets = datasets
        this.myChart.data.labels = labels
        this.myChart.update()
      } else {

        this.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: shorts,
            datasets: datasets
          },
          options: {
            legend: {
              display: false,
            },
            tooltips: {
              displayColors: false,
              bodyFontFamily: 'Maven Pro',
              bodyFontSize: 14,
              titleFontColor: colors.grey,
              titleFontSize: 14,
              borderWidth: 2,
              color: colors.aqua,
              fontColor: colors.aqua,
              borderColor: colors.lightgrey,
              backgroundColor: colors.white,
              bodyFontColor: colors.grey,
              callbacks: {
                label: function (item, data) {
                  if (Number(item.yLabel) < 1 && Number(item.yLabel) > 0) {
                    return numeral(item.yLabel).format('0.00%')
                  }
                  return numeral(item.yLabel).format('0.00a')
                }
              }
            },
            scales: {
              xAxes: [{
                gridLines: { display: false },
                stacked: true,
                barPercentage: 0.5,
                ticks: {
                  maxRotation: 0,
                  color:  colors.grey,
                  fontColor: colors.grey,
                  fontSize: 12,
                },
              }],
              yAxes: [{
                gridLines: { display: false },
                ticks: {
                  color:  colors.grey,
                  fontColor: colors.grey,
                  fontSize: 12,
                  callback: function (label, index, labels) {
                    if (label.toString().indexOf('.') !== -1) {
                      return numeral(label).format('0%')
                    }
                    return numeral(label).format('0a')
                  }
                },
              }]
            }
          },
        })
      }

    }

  },
  watch: {
    'inViewport.now' (visible) {
      if (visible) {
        if (this.current === undefined) {
          this.populate((current, needed) => {
            this.current = current
            this.needed = needed
            this.draw()
          })
        } else {
          this.draw()
        }
      }
    }
  },

  data () {
    return {
      myChart: undefined,
      current: undefined,
      needed: undefined,
    }
  },

}
</script>
