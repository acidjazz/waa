<script>
import visionCharts from '@/mixins/visionCharts'
import charts from '@/mixins/charts'
import pkg from '@/package'
import numeral from 'numeral'
export default {
  mixins: [ visionCharts ],

  mounted () {
    this.chartdata.datasets[0].borderColor = pkg.cfg.colors.deepsky
    this.options.tooltips.callbacks.label = (item, data) => numeral(item.yLabel).format('$0,0')
    this.chartdata.labels = this.labels
    this.chartdata.datasets[0].data = this.medianIncome
    setTimeout( () => this.renderChart(this.chartdata, this.options), 1200)
  },
}
</script>

