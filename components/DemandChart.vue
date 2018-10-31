<template lang="pug">
doctype
#DemandChart
  .demandchart-copy
    .title 4.6 Million
    .copy New apartment homes needed in the U.S. by the year 2030
    .subtitle Demand Is Rising
    .copy Population growth, immigration and changing lifestyle preferences mean more people will be living in apartments in the future.  The challenge, however, is building the number of apartment homes to meet that growing demand.

  .demandchart-canvas
    canvas(id="DemandChartCanvas",ref="canvas")
</template>

<style lang="stylus" scoped>
json('../assets/colors.json')
json('../assets/fonts.json')
#DemandChart
  margin 60px auto
  display flex
  flex-direction row
  justify-content center
  align-items stretch
  align-self center
.demandchart-copy
  width 300px
  margin-right 60px
  .title
    font h2
    padding 0 0 20px 0
  .subtitle
    font h3
    padding 20px 0
  .copy
    color grey
.demandchart-canvas
  width 700px

@media all and (min-width: 1px) and (max-width: 1000px)
  #DemandChart
    flex-direction column
    justify-content space-evenly
    padding 0 20px

  .demandchart-canvas
    width 100%
  .demandchart-copy
    width 100%


</style>

<script>
import colors from '~/assets/colors.json'
export default {

  methods: {

    datas () {
      return {
        labels: ['2017', '2019', '2021', '2023', '2025', '2027', '2030'],
        data: [0, 5, 15, 25, 30, 30, 40],
      }
    },

    makeChart () {

      if (this.chart !== false) {
        return true
      }

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
                callback: function (label, index, labels) {
                  return `'${label.substr(-2)}`
                },
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
                min: 0,
                max: 80,
              }
            }],
          }
        },
      })
    }
  },

  mounted () {
    this.makeChart()
  },

  data () {
    return {
      chart: false,
      orange: '#ff763f',
      red: '#fc016b',
    }
  }
}

</script>
