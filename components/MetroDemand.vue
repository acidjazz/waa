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
#MetroDemand
  padding 90px 0
  width 900px
  margin auto
  text-align center
  > .inner
    > .title
      font h2
      inViewport(0.1)
    > .copy
      width 590px
      margin auto
      padding 30px 0
      color grey
      inViewport(0.2)
    > .legend
      text-align right
      > .dot
        float right
        width 15px
        height 15px
        background-color aqua
        border-radius 50%
        margin 3px 10px 0 0
        inViewportSide(0.3)
      > .copy
        float right
        font c1ssb
        text-transform uppercase
        inViewportSide(0.4)
    > hr
      color lightgrey
      border-top 1px solid lightgrey
      border-bottom 1px solid lightgrey
      margin 30px 0
    > .chart
      margin 90px 0 0 0
</style>

<script>
import colors from '~/assets/colors.json'
import inViewport from 'vue-in-viewport-mixin'
import inViewportDirective from 'vue-in-viewport-directive'

export default {

  directives: { 'in-viewport': inViewportDirective },

  mixins: [ inViewport ],

  methods: {

    draw () {

      const numeral = window.numeral
      const Chart = window.Chart

      let ctx = 'chartMetroDemand'

      let datasets = [{
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        backgroundColor: colors.aqua,
      }, {
        data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        backgroundColor: colors.lightgrey,
      }]

      let labels = ['NYC', 'DALLAS', 'MIAMI', 'ATLANTA', 'LA', 'PHOENIX', 'ORLANDO', 'WASHINGTON', 'AUSTIN']

      if (this.myChart !== undefined) {
        this.myChart.data.datasets = datasets
        this.myChart.data.labels = labels
        this.myChart.update()
      } else {

        this.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['NYC', 'DALLAS', 'MIAMI', 'ATLANTA', 'LA', 'PHOENIX', 'ORLANDO', 'WASHINGTON', 'AUSTIN'],
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
              titleFontColor: colors.aqua,
              titleFontSize: 14,
              borderWidth: 2,
              color: colors.aqua,
              fontColor: colors.aqua,
              borderColor: colors.lightgrey,
              backgroundColor: colors.white,
              bodyFontColor: colors.aqua
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
                  fontSize: 14,
                },
              }],
              yAxes: [{
                gridLines: { display: false },
                ticks: {
                  color:  colors.grey,
                  fontColor: colors.grey,
                  fontSize: 14,
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
        this.draw()
      }
    }
  },

  data () {
    return {
      myChart: undefined,
    }
  },

}
</script>
