
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
        scales: {
          xAxes: [{
            gridlines: {
              color: '#f4f7f9',
              display: false,
              zeroLineColor: '#f4f7f9',
            },
            ticks: {
              fontSize: 13,
              fontColor: '#989898',
              callback: (label, index, labels) => `${label.toString().substr(-2)}`,
            },
          }],
          yAxes: [{
            gridlines: {
              color: '#f4f7f9',
              display: false,
              zeroLineColor: '#f4f7f9',
            },
            position: 'right',
            ticks: {
              fontSize: 11,
              fontColor: '#989898',
              maxTicksLimit: 6,
            },
          }],
        },
      },
    }
  },
  mounted () {
    setTimeout( () => this.renderChart(this.chartdata, this.options), 600)
  }
}
</script>
