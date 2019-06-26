
<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data () {
    return {
      chartdata: {
        labels: [2002, 2003, 2004, 2005],
        datasets: [{
          label: 'Data',
          boderColor: 'red',
          backgroundColor: '#223355',
          data: [10, 20, 30, 40],
        }]
      },
      options: {
        legend: { display: false, },
        layout: { padding: { left: 0, top: 20, right: 0, bottom: 20 }, },
        sclaes: {
          xAxes: [{
            gridlines: {
              color: '#f4f7f9',
            }
          }],
        },
      },
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
