
<template lang="pug">
  canvas#myChart(width=400,height=400)
</template>

<style lang="stylus">
#myChart
  width 400px
  height 400px
</style>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    let graph = this.$store.state.chart[0]
    let datasets = []
    for (let key in graph.data) {
      datasets.push({
        fill: true,
        label: key,
        visible: false,
        data: graph.data[key]
      })
    }

    let Chart = require('chart.js')
    Chart.defaults.global.defaultFontSize = 16
    let ctx = 'myChart'
    let myChart = new Chart(ctx, {
      type: 'bar',
      width: 400,
      height: 400,
      data: {
        labels: graph.labels,
        datasets: datasets
      },
      options: { scales: { yAxes: [{ stacked: true, ticks: { beginAtZero: false } }] } }
    })
  }
}
</script>
