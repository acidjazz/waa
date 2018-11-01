<template lang="pug">
doctype
#DemandChart
  .demandchart-copy
    .title(v-in-viewport)
      i-count-up.number(v-if="count",:start="0",:end="4.6",:decimals="1",:duration="2")
      | &nbsp;Million
    .copy(v-in-viewport) New apartment homes needed in the U.S. by the year 2030
    .subtitle(v-in-viewport) Demand Is Rising
    .copy(v-in-viewport) Population growth, immigration and changing lifestyle preferences mean more people will be living in apartments in the future.  The challenge, however, is building the number of apartment homes to meet that growing demand.

  .demandchart-canvas
    canvas(id="DemandChartCanvas",ref="canvas")
</template>

<style lang="stylus" scoped>
@import '../assets/stylus/mixins'
json('../assets/colors.json')
json('../assets/fonts.json')
#DemandChart
  margin 120px auto
  display flex
  flex-direction row
  justify-content center
  align-items stretch
  align-self center
.demandchart-copy
  width 300px
  margin-right 120px
  .title
    font h2
    padding 0 0 20px 0
    inViewport(0.1)
  .subtitle
    font h3
    padding 20px 0
    inViewport(0.2)
  .copy
    color grey
    inViewport(0.3)
.demandchart-canvas
  width 700px

@media all and (min-width: 1px) and (max-width: 1000px)
  #DemandChart
    margin 60px auto
    flex-direction column
    justify-content space-evenly
    padding 0 20px

  .demandchart-canvas
    width 100%
  .demandchart-copy
    margin-right 0px
    margin-bottom 60px
    width 100%


</style>

<script>
import ICountUp from 'vue-countup-v2'
import inViewportDirective from 'vue-in-viewport-directive'
import inViewport from 'vue-in-viewport-mixin'
import colors from '~/assets/colors.json'
import udata from '../static/US Building 2'
export default {
  mixins: [ inViewport ],
  components: { ICountUp },
  directives: { 'in-viewport': inViewportDirective },

  methods: {

    datas () {

      let result = {
        labels: [],
        data: [],
      }

      for (let key in udata.data) {
        if (key !== '2016') {
          result.labels.push(key.toString())
          result.data.push(udata.data[key][1])
        }
      }

      console.log(result)
      return result

    },

    makeChart () {

      // if (this.chart !== false) { return true }
      const numeral = window.numeral

      let ctx = this.$refs.canvas.getContext('2d')
      let gradient = ctx.createLinearGradient(500, 0, 200, 0)
      gradient.addColorStop(0, this.red)
      gradient.addColorStop(1, this.orange)

      this.chart = new window.Chart(ctx, {
        type: 'line',
        data: {
          labels: this.datas().labels,
          datasets: [{
            label: 'Data',
            borderColor: gradient,
            backgroundColor: gradient,
            pointRadius: 0,
            fill: true,
            borderWidth: 1,
            data: this.datas().data,
          }]
        },
        options: {
          legend: {
            display: false,
          },
          layout: {
            padding: { left: 0, top: 20, right: 0, bottom: 20 },
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: colors.lightgrey,
                display: false,
                zeroLineColor: colors.lightgrey,
              },
              ticks: {
                fontSize: 13,
                fontColor: colors.grey,
                callback: (label, index, labels) => `'${label.toString().substr(-2)}`,
              },
            }],
            yAxes: [{
              gridLines: {
                color: colors.lightgrey,
                zeroLineColor: colors.lightgrey,
              },
              position: 'right',
              ticks: {
                fontsize: 11,
                fontColor: colors.grey,
                maxTicksLimit: 6,
                callback: (label, index, labels)  => numeral(label).format('0,0a'),
              }
            }],
          }
        },
      })
    }
  },

  mounted () {
  },
  watch: {
    'inViewport.now' (visible) {
      if (visible) {
        setTimeout(() => this.makeChart(), 500)
        this.count = true
      }
    },
    '$route' () {
      this.makeChart()
    }
  },

  data () {
    return {
      count: false,
      chart: false,
      orange: '#ff763f',
      red: '#fc016b',
    }
  }
}

</script>
