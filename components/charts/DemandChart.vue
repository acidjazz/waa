
<script>
import { Line } from 'vue-chartjs'
import numeral from 'numeral'
import sheets from '@/mixins/sheets'
import pkg from '@/package'
export default {
  extends: Line,
  mixins: [ sheets ],
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
  mounted () {

    console.log(this.dataset)

    this.chartdata.labels = Object.keys(this.dataset)
    this.chartdata.datasets[0].data = Object.values(this.dataset)

    if (this.$refs.canvas && typeof this.$refs.canvas.getContext !== "undefined") {
      let gradient = this.$refs.canvas.getContext('2d').createLinearGradient(700, 0, 200, 0)
      gradient.addColorStop(0, pkg.cfg.colors.bpink)
      gradient.addColorStop(1, pkg.cfg.colors.orange)

      this.chartdata.datasets[0].borderColor = gradient
      this.chartdata.datasets[0].backgroundColor = gradient
    }

    setTimeout( () => this.renderChart(this.chartdata, this.options), 300)
  }
}
</script>
