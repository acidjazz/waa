<script>
import { Line } from 'vue-chartjs'
import numeral from 'numeral'
import sheets from '@/mixins/sheets'
import pkg from '@/package'
import count from '@/mixins/count'
export default {
  extends: Line,
  mixins: [ sheets, count ],
  data () {
    return {
      chartdata: {
        labels: [],
        datasets: [{
          pointRadius: 0,
          data: [],
        }]
      },
      options: {
        legend: { display: false, },
        scales: {
          xAxes: [{
            gridLines: { display: false, },
            ticks: {
              fontSize: 13,
              fontColor: pkg.cfg.colors.alum,
              callback: (label, index, labels) => `'${label.toString().substr(-2)}`
            },
          }],
          yAxes: [{
            gridLines: { display: false, },
            position: 'right',
            ticks: {
              fontSize: 11,
              fontColor: pkg.cfg.colors.alum,
              maxTicksLimit: 6,
              callback: (label, index, labels) => numeral(label).format('0,0a')
            },
          }],
        },
      },
    }
  },
  computed: {
    dataset () { return this.sheet('main', 'HomeDemand', 2) },
  },
  watch: {
    fire (result) {
      if (result) setTimeout( () => this.renderChart(this.chartdata, this.options), 400)
      else if (this.$data._chart) this.$data._chart.destroy()
    }
  },
  mounted () {
   this.chartdata.labels = Object.keys(this.dataset)
    this.chartdata.datasets[0].data = Object.values(this.dataset)
    let gradient = this.$refs.canvas.getContext('2d').createLinearGradient(700, 0, 200, 0)
    gradient.addColorStop(0, pkg.cfg.colors.bpink)
    gradient.addColorStop(1, pkg.cfg.colors.orange)
    this.chartdata.datasets[0].borderColor = gradient
    this.chartdata.datasets[0].backgroundColor = gradient
  }
}
</script>
