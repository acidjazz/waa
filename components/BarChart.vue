<template lang="pug">
  .bar-chart
    canvas(:id="'chart-' + id",:width="width",:height="height")
</template>

<script>
import colors from '~/assets/colors.json'
export default {

  props: ['id', 'width', 'height'],
  data () {
    return {}
  },
  mounted () {
    const Chart = window.Chart
    let ctx = 'chart-' + this.id

    let solid = colors.lime
    let light = colors.lightlime

    let labels = ['None', '1-19 Min.', '20-39 Min.', '40-59 Min.', '60+ Min.']
    let datas = []
    let odatas = []

    for (let i = 0; i !== 5; i++) {
      let value = Math.floor(Math.random() * 60) + 0
      datas.push(value)
      odatas.push(value + (Math.floor(Math.random() * 10) + 0))
    }

    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: datas,
          backgroundColor: solid
        },
        {
          data: odatas,
          backgroundColor: light
        }]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: { display: false, },
            stacked: true,
            ticks: {
              autoSkip: false,
              fontColor: colors.grey
            }
          }],
          yAxes: [{
            display: false,
          }],
        }
      }
    })
  }

}
</script>
