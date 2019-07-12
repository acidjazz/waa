<script>
import visionCharts from '@/mixins/visionCharts'
import charts from '@/mixins/charts'
import pkg from '@/package'
import numeral from 'numeral'
export default {
  mixins: [ visionCharts ],
  mounted () {
    this.chartdata.labels = this.labels
    this.chartdata.datasets[0].data = this.overThirty
    this.options.tooltips.callbacks.label = (item, data) => numeral(item.yLabel/100).format('0%')
    setTimeout( () => this.renderChart(this.chartdata, this.options), 1800)
  },


}
</script>
