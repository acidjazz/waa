<script>
import visionCharts from '@/mixins/visionCharts'
import charts from '@/mixins/charts'
import pkg from '@/package'
export default {
  mixins: [ visionCharts ],
  data () {
    return {
      chartdata: {
        labels: [],
        datasets: [{
          ...charts.datasetLine,
          borderColor: pkg.cfg.colors.orange
        }]
      },
      options: charts.options
    }
  },
  mounted () {
    this.chartdata.labels = this.labels
    this.chartdata.datasets[0].data = this.medianIncome
    setTimeout( () => this.renderChart(this.chartdata, this.options), 600)
  },
}
</script>

