<script>
import { Line } from 'vue-chartjs'
import sheets from '@/mixins/sheets'
import charts from '@/mixins/charts'
import pkg from '@/package'
export default {
  extends: Line,
  mixins: [ sheets ],
  data () {
    return {
      chartdata: {
        labels: [],
        datasets: [{
          ...charts.datasetLine,
            borderColor: pkg.cfg.colors.orange,
        },{
          ...charts.datasetLine,
          borderColor: pkg.cfg.colors.deepsky,
        }]
      },
      options: charts.options,
    }
  },
  computed: {
    datas () { return this.sheet('main', 'visionBuildMore', 'Year') },
    labels () { return Object.keys(this.datas) },
    current () { return Object.values(this.datas).map(r => r.Current) },
    needed () { return Object.values(this.datas).map(r => r.Needed) },
  },
  mounted () {
    this.chartdata.labels = this.labels
    this.chartdata.datasets[0].data = this.current
    this.chartdata.datasets[1].data = this.needed
    setTimeout( () => this.renderChart(this.chartdata, this.options), 600)
  },
}
</script>
