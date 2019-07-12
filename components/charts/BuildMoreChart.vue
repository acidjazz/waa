<script>
import { Line } from 'vue-chartjs'
import numeral from 'numeral'
import sheets from '@/mixins/sheets'
import pkg from '@/package'
export default {
  extends: Line,
  mixins: [ sheets ],
  data () {
    const dataset = {
      backgroundColor: pkg.cfg.colors.white,
      pointRadius: 1,
      pointHoverBackgroundColor: pkg.cfg.colors.white,
      pointHoverBorderColor: pkg.cfg.colors.black,
      pointHoverBorderWidth: 4,
      pointHoverRadius: 6,
      borderWidth: 5,
      data: [],
    }
    return {
      chartdata: {
        labels: [],
        datasets: [{
          ...dataset,
            borderColor: pkg.cfg.colors.orange,
        },{
          ...dataset,
          borderColor: pkg.cfg.colors.deepsky,
        }]
      },
      options: {
        tooltips: {
          backgroundColor: 'black',
          borderWidth: 1,
          yPadding: 14,
          xPadding: 20,
          displayTitle: false,
          displayColors: false,
          callbacks: {
            label: (item, data) => `${numeral(item.yLabel).format('0,0')} units`,
          },
        },
        legend: { display: false, },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              fontSize: 10,
              maxTicksLimit: 8,
            },
          }],
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 8,
              fontColor: pkg.cfg.colors.alum,
              callback: (label, index, labels) => numeral(label).format('0,0a'),
            },
          }],
        },
      },
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
