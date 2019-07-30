<script>
import { Bar } from 'vue-chartjs'
import charts from '@/mixins/charts'
import pkg from '@/package'
import numeral from 'numeral'
// import fire from '@/mixins/fire'
export default {
  extends: Bar,
  mixins: [ charts ],
  props: {
    current: {
      type: Number,
      required: true,
    },
    future: {
      type: Number,
      required: true,
    },
  },
  data () {
    return {
      chartdata: {
        animation: false,
        labels: [2016, 2030],
        datasets: [{
          ...charts.datasetLine,
          data: [this.current, this.future],
          borderColor: [pkg.cfg.colors.alum, pkg.cfg.colors.orange],
          backgroundColor: [pkg.cfg.colors.alum, pkg.cfg.colors.orange],
        }]
      },
      options: {
        ...charts.options,
        scales: {
          ...charts.options.scales,
          yAxes: [{
            ...charts.options.scales.yAxes[0],
            ticks: {
              ...charts.options.scales.yAxes[0].ticks,
              beginAtZero: true,
            },
          }],
        },
        tooltips: {
          ...charts.options.tooltips,
          callbacks: {
            label: (item, data) => `${numeral(item.yLabel).format('0,0')} homes`,
          },
        },
      },
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
