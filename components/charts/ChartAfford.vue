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
          borderColor: pkg.cfg.colors.deepsky
        }]
      },
      options: charts.options
    }
  },

  mounted () {
    this.chartdata.labels = this.labels
    this.chartdata.datasets[0].data = this.overThirty
    setTimeout( () => this.renderChart(this.chartdata, this.options), 600)
  },


}
</script>
